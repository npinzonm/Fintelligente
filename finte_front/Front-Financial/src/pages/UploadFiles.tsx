import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, Loader, Upload } from "lucide-react"; // Nuevos iconos
import Sidebar from "../components/Sidebar"; // Importamos el Sidebar
import Header from "../components/Header"; // Importamos el Header (asumiendo que existe)
import { uploadFinancialFile } from "../api/files";
import type { ReporteFinanciero } from "../types/financial";


const UploadFiles = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate(); 
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Manejo de la selección de archivo desde el input o drag and drop
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setMessage(`PDF seleccionado: ${selectedFile.name}`);
    } else if (selectedFile) {
        setMessage("Solo se permiten archivos PDF.");
        setFile(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Selecciona un archivo primero.");
      return;
    }

    setLoading(true);
    if(loading){
      /* Limpiar LocalStorage previo */
      localStorage.removeItem('last_financial_report');
    }
    setMessage("Analizando documento... esto puede tardar unos segundos. Por favor, espera.");

    try {
      const response: ReporteFinanciero = await uploadFinancialFile(file); 
      
      setMessage("Archivo analizado correctamente. Redirigiendo.");

      /*Verificar localStorage*/
      const storedReport = localStorage.getItem('last_financial_report');
      if (storedReport) {
          console.log("Reporte en localStorage:", JSON.parse(storedReport));
      } else {
          console.warn("No se encontró reporte en localStorage después de la subida.");
      }
      
      // Navegamos al reporte con los datos en el state
      navigate("/report", { state: { reporteData: response } });
      
    } catch (err) {
      console.error(err);
      setMessage(`Error al enviar archivo: ${err instanceof Error ? err.message : 'Error de conexión/servidor.'}`);
      setLoading(false);
    }
  };

  // Determinar clases de color para el mensaje
  const getMessageClasses = () => {
    if (loading) return 'text-blue-600';
    if (message.includes('Error')) return 'text-red-600 font-medium';
    if (file) return 'text-green-600';
    return 'text-gray-500';
  };
  
  // Clase para el área de drop basada en el estado
  const getDropzoneClasses = () => {
    const classes = "w-full p-10 rounded-lg transition-all duration-200 cursor-pointer text-center pointer-events-auto ";
    if (loading) return classes + "border-gray-300 bg-gray-50 pointer-events-none";
    if (file) return classes ;
    return classes ;
  }

  return (
    <div className="flex">
      <Sidebar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-100">
        <Header /> {/* Usar Header sin props para evitar error de tipado */}

        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Analizar Extracto</h1>
            
            <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                
                {/* ÁREA DE CARGA (SIMULACIÓN DE DRAG AND DROP) */}
                <label htmlFor="file-upload" className={getDropzoneClasses()}>
                    {file ? (
                        <div className="flex flex-col items-center">
                            <FileText size={48} className="text-indigo-600 mb-2" />
                            <p className="font-semibold text-lg text-indigo-700">{file.name}</p>
                            <p className="text-sm text-gray-500">Haz clic para cambiar o analizar.</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <Upload size={48} className="text-gray-400 mb-2" />
                            <p className="text-lg font-medium text-gray-700">Arrastra y suelta tu PDF aquí</p>
                            <p className="text-sm text-gray-500">o haz clic para seleccionar (solo archivos .pdf)</p>
                        </div>
                    )}
                    
                    {/* Input de archivo escondido */}
                    <input
                        id="file-upload"
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        disabled={loading}
                        className="hidden"
                    />
                </label>
                
                {/* BOTÓN DE ACCIÓN */}
                <div className="mt-6">
                    <button
                        onClick={handleUpload}
                        disabled={loading || !file}
                        className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
                    >
                        {loading && <Loader size={20} className="animate-spin" />}
                        {loading ? "Clasificando con IA..." : "Subir y Analizar PDF"}
                    </button>
                </div>

                {/* MENSAJE DE ESTADO */}
                {message && (
                    <p className={`mt-4 text-center text-sm ${getMessageClasses()}`}>
                        {message}
                    </p>
                )}
            </div>
        </div>
      </main>
    </div>
  );
};

export default UploadFiles;