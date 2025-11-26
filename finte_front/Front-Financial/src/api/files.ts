
// import { mockReporte } from "./mockData"; // Importa la data ficticia
import type { ReporteFinanciero } from "../types/financial";
export const uploadFinancialFile = async (file: File) => {
  
  const formData = new FormData();
  formData.append("file", file);

  /* Agregar ruta del backend */
  const response = await fetch("https://fintelligente-backend.onrender.com/upload-financial-pdf", {
    method: "POST",
    headers: {
   
    },
    body: formData,
  });

  
  
if (!response.ok) {
    
    let errorDetail: unknown = { detail: "Error desconocido" };
    try {
        errorDetail = await response.json();
    } catch (e) {
        // Si no es JSON, usamos el statusText
       console.error("Error al parsear el error de la API:", e);
       errorDetail = { detail: response.statusText };
    }
    
    console.error("Detalle del error de la API:", errorDetail);
    throw new Error(`Upload failed: ${response.status} - ${JSON.stringify(errorDetail)}`);
  }

  const reporteData: ReporteFinanciero = await response.json();
  console.log("Reporte recibido de la API:", reporteData);

  // 2. Guardar el resultado en localStorage
  try {
      localStorage.setItem('last_financial_report', JSON.stringify(reporteData));
      console.log("Reporte guardado en localStorage.");
  } catch (e) {
      console.error("Error al guardar en localStorage:", e);
      // Opcional: manejar si el localStorage está lleno o deshabilitado
  }
  
  // 3. Devolver el reporte para que el componente frontend lo use inmediatamente
  return reporteData;
};

/* SIMULADO */
// export const uploadFinancialFile = async (file: File) => {
//     // 1. Simular la latencia de red/procesamiento de la IA (2 segundos)
//     console.log("SIMULACIÓN: Esperando 2 segundos para simular la respuesta de Gemini...");
//     await new Promise(resolve => setTimeout(resolve, 2000)); 

//     // 2. Simular que la subida fue exitosa
//     if (!file) {
//         throw new Error("No se seleccionó archivo (simulación de validación)");
//     }
    
//     // 3. Devolver la data ficticia con el tipo correcto
//     console.log("SIMULACIÓN: Retornando reporte fijo.");
//     return mockReporte; 
// };