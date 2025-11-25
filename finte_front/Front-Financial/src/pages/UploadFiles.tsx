import { useState } from "react";
import { uploadFinancialFile } from "../api/files";

const UploadFiles = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Selecciona un archivo primero.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const response = await uploadFinancialFile(file, token || "");
      setMessage("Archivo enviado correctamente.");
      console.log("Response:", response);
    } catch (err) {
      console.error(err);
      setMessage("Error al enviar archivo.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center mt-12 gap-4 p-6">
      <h2 className="text-2xl font-semibold">Subir archivo financiero</h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="block px-4 py-2 border rounded-md"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:bg-gray-400"
      >
        {loading ? "Cargando..." : "Subir archivo"}
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default UploadFiles;