// src/pages/ReportPage.tsx

import { useState, useEffect } from "react"; // Necesitamos useState
import { useLocation, useNavigate } from "react-router-dom"; 
import { ReporteVisualizer } from '../components/ReporteVisualizer';
import type { ReporteFinanciero } from "../types/financial"; 

const ReportPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Estado local para manejar los datos del reporte, ya sea del state o localStorage
    const [reporte, setReporte] = useState<ReporteFinanciero | null>(null);
    // Estado para saber si ya terminamos de cargar/verificar
    const [isLoading, setIsLoading] = useState(true); 

    // Función auxiliar para cargar del localStorage
    const loadReportFromStorage = (): ReporteFinanciero | null => {
        const storedReport = localStorage.getItem('last_financial_report');
        if (storedReport) {
            try {
                return JSON.parse(storedReport) as ReporteFinanciero;
            } catch (e) {
                console.error("Error al parsear el reporte de localStorage:", e);
                localStorage.removeItem('last_financial_report'); // Limpiar datos corruptos
                return null;
            }
        }
        return null;
    }

    useEffect(() => {
        // 1. Intentar obtener la data pasada por la navegación (desde UploadFiles)
        const stateData: ReporteFinanciero | undefined = location.state?.reporteData;
        
        let loadedReport: ReporteFinanciero | null = null;

        if (stateData) {
            // Si hay datos en el estado, los usamos directamente.
            loadedReport = stateData;
        } else {
            // 2. Si no hay datos en el estado (ej. recarga), buscar en localStorage
            loadedReport = loadReportFromStorage();
        }

        if (loadedReport) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setReporte(loadedReport);
        } else {
            // 3. Si no hay datos ni en state ni en localStorage, redirigir
            alert("No se encontró data del reporte. Redirigiendo al Dashboard.");
            navigate("/dashboard"); // Redirigir al dashboard o a la página de subida.
        }

        setIsLoading(false);

        // Dependencias: location.state (para detectar la navegación) y navigate
    }, [location.state, navigate]);

    if (isLoading) {
        // Muestra un estado de carga mientras verifica los datos y redirige si es necesario
        return (
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <p className="text-lg font-medium text-gray-700">Cargando reporte...</p>
            </div>
        );
    }

    if (!reporte) {
        // Debería ocurrir una redirección si reporte es null, pero como fallback visual
        return null;
    }

    // Renderiza el visualizador con los datos obtenidos
    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <h1 className="text-3xl font-extrabold text-indigo-900 mb-6">Detalle del Reporte Clasificado</h1>
            <div className="max-w-7xl mx-auto">
                <ReporteVisualizer reporte={reporte} />
            </div>
        </div>
    );
};

export default ReportPage;