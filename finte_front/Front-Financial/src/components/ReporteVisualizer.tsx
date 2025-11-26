// src/components/ReporteVisualizer.tsx

import { useState } from 'react';
import { useNavigate } from "react-router-dom"; // 💡 Importamos useNavigate
import type { ReporteFinanciero } from "../types/financial"; 

// Definimos cuántos elementos mostrar por página
const ITEMS_PER_PAGE = 10;

export const ReporteVisualizer = ({ reporte }: { reporte: ReporteFinanciero }) => {
    
    const [currentPage, setCurrentPage] = useState(1);
    // 💡 Inicializamos el hook de navegación
    const navigate = useNavigate(); 
    
    // Cálculos de Paginación
    const totalTransactions = reporte.transacciones.length;
    const totalPages = Math.ceil(totalTransactions / ITEMS_PER_PAGE);

    // Índices de corte para la data actual
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    // Obtener las transacciones de la página actual
    const currentTransactions = reporte.transacciones.slice(startIndex, endIndex);

    // Handlers de paginación
    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // 💡 Handler para el botón de regreso
    const goToDashboard = () => {
        // Asumiendo que la ruta del dashboard es "/" o "/dashboard"
        navigate("/dashboard"); 
    };

    return (
        <div className="w-full max-w-6xl mx-auto mt-8 p-6 bg-white shadow-xl rounded-lg">
            
            {/* 💡 A. BOTÓN DE NAVEGACIÓN AÑADIDO AQUÍ */}
            <div className="flex justify-start mb-6">
                <button
                    onClick={goToDashboard}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                    &larr; Volver al Dashboard
                </button>
            </div>
            
            {/* B. Resumen y KPIs */}
            <h3 className="text-xl font-bold mb-4 border-b pb-2 text-indigo-800">📊 Resumen Financiero (Clasificación IA)</h3>
            <p className="text-gray-700 italic mb-4">{reporte.resumen}</p>
            <div className="flex justify-around mb-6 text-center font-semibold border-b pb-4">
                {/* Total Ingresos */}
                <div className="p-3 bg-green-100 rounded-lg min-w-[150px]">
                    <p className="text-sm text-green-700">Total Ingresos</p>
                    <p className="text-2xl text-green-900">
                        {new Intl.NumberFormat('es-CO', { 
                            style: 'currency', 
                            currency: 'COP',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0
                        }).format(reporte.total_ingresos)}
                    </p>
                </div>
                {/* Total Gastos */}
                <div className="p-3 bg-red-100 rounded-lg min-w-[150px]">
                    <p className="text-sm text-red-700">Total Gastos</p>
                    <p className="text-2xl text-red-900">
                        {new Intl.NumberFormat('es-CO', { 
                            style: 'currency', 
                            currency: 'COP',
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0
                        }).format(reporte.total_gastos)}
                    </p>
                </div>
            </div>

            {/* C. TABLA DE TRANSACCIONES PAGINADA */}
            <h4 className="text-lg font-semibold mt-6 mb-3">Movimientos Clasificados ({totalTransactions} en total)</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentTransactions.map((t, index) => (
                            <tr key={startIndex + index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t.fecha}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.descripcion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">{t.categoria}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold" style={{ color: t.tipo === 'ingreso' ? 'green' : 'red' }}>
                                    {t.tipo === 'gasto' && '-'}{new Intl.NumberFormat('es-CO', { 
                                        style: 'currency', 
                                        currency: 'COP',
                                        minimumFractionDigits: 0, 
                                        maximumFractionDigits: 0
                                    }).format(t.monto)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t.tipo === 'ingreso' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {t.tipo}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* D. CONTROLES DE PAGINACIÓN */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-700">
                        Mostrando {startIndex + 1} a {Math.min(endIndex, totalTransactions)} de {totalTransactions} resultados
                    </p>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                        <button
                            onClick={goToPrevPage}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                        >
                            Anterior
                        </button>
                        <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-indigo-50 text-sm font-medium text-indigo-700">
                            Página {currentPage} de {totalPages}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                        >
                            Siguiente
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};