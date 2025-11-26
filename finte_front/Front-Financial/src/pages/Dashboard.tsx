import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom"; 
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";
import type { ReporteFinanciero } from "../types/financial";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts'; 
import { Upload, DollarSign } from "lucide-react"; // Añadido DollarSign para el Top Gasto

// Colores consistentes para la gráfica de pastel
const COLORS = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF199C', 
    '#19FFC4', '#FF5733', '#C70039', '#900C3F', '#581845', '#4A235A'
];

// ----------------------------------------------------------------------
// TIPADO AUXILIAR
// ----------------------------------------------------------------------
type CategoriaTotal = {
    nombre: string;
    totalGasto: number;
    totalIngreso: number;
    balanceCategoria: number;
};
type ChartData = { name: string, value: number }[];


// ----------------------------------------------------------------------
// 🛠️ FUNCIÓN DE AYUDA (Para cargar y parsear del storage)
// ----------------------------------------------------------------------
const loadReportFromStorage = (): ReporteFinanciero | null => {
    const storedReport = localStorage.getItem('last_financial_report');
    if (storedReport) {
        try {
            return JSON.parse(storedReport) as ReporteFinanciero;
        } catch (e) {
            console.error("Error al parsear el reporte guardado, dato corrupto:", e);
            localStorage.removeItem('last_financial_report'); 
            return null;
        }
    }
    return null;
}


// ----------------------------------------------------------------------
// 🎨 COMPONENTE AUXILIAR DE LA GRÁFICA DE PASTEL (Sin cambios)
// ----------------------------------------------------------------------
const PieChartActual = ({ data, title }: { data: ChartData, title: string }) => (
    <div className="bg-white p-4 rounded-xl shadow-md h-96 flex flex-col">
        <h4 className="text-xl font-bold mb-3 text-gray-800">{title}</h4>
        <div className="flex-grow">
            {data.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label={({ name, percent }) => `${name} (${(percent ? percent * 100 : 0).toFixed(1)}%)`}
                            labelLine={true}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            formatter={(value: number) => `$${value.toLocaleString('es-CO', { minimumFractionDigits: 2 })}`}
                        />
                        <Legend 
                            layout="vertical" 
                            align="right" 
                            verticalAlign="middle" 
                            wrapperStyle={{ fontSize: '12px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                 <div className="flex justify-center items-center h-full text-gray-500">
                    <p>No hay gastos registrados para mostrar.</p>
                </div>
            )}
        </div>
    </div>
);


// ----------------------------------------------------------------------
// 🎣 HOOK DE PROCESAMIENTO DE DATOS (useDashboardData)
// ----------------------------------------------------------------------
const useDashboardData = () => {
    const [data, setData] = useState<ReporteFinanciero | null>(null);
    const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false); 

    useEffect(() => {
        const storedData = loadReportFromStorage();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setData(storedData);
        setIsInitialLoadComplete(true); 
    }, []);

    const processedData = useMemo(() => {
        if (!data) {
            return {
                totalIngresos: 0,
                totalGastos: 0,
                balanceNeto: 0,
                numCategorias: 0,
                categorias: [] as CategoriaTotal[],
                chartGastos: [] as ChartData,
            };
        }
        
        const totalIngresos = data.total_ingresos;
        const totalGastos = data.total_gastos;
        const balanceNeto = totalIngresos - totalGastos;
        
        const agrupado: Record<string, { gasto: number, ingreso: number }> = {};
 
        data.transacciones.forEach(t => {
            const cat = t.categoria;
            if (!agrupado[cat]) {
                agrupado[cat] = { gasto: 0, ingreso: 0 };
            }
            if (t.tipo === 'gasto') {
                agrupado[cat].gasto += t.monto;
            } else {
                agrupado[cat].ingreso += t.monto;
            }
        });

        const categoriasArray: CategoriaTotal[] = Object.entries(agrupado).map(([nombre, totales]) => {
            const totalGasto = parseFloat(totales.gasto.toFixed(2));
            const totalIngreso = parseFloat(totales.ingreso.toFixed(2));
            return {
                nombre,
                totalGasto,
                totalIngreso,
                balanceCategoria: totalIngreso - totalGasto,
            };
        });
        // 💡 ORDENAMOS POR GASTO (de mayor a menor) para el Top 4
        categoriasArray.sort((a, b) => b.totalGasto - a.totalGasto);
        
        const gastosAgrupados = data.transacciones
            .filter(t => t.tipo === 'gasto')
            .reduce((acc, t) => {
                acc[t.categoria] = (acc[t.categoria] || 0) + t.monto;
                return acc;
            }, {} as Record<string, number>);

        const chartGastos: ChartData = Object.entries(gastosAgrupados)
            .sort(([, a], [, b]) => b - a) 
            .map(([name, value]) => ({ 
                name, 
                value: parseFloat(value.toFixed(2)) 
            }));


        return {
            totalIngresos,
            totalGastos,
            balanceNeto,
            numCategorias: categoriasArray.length,
            categorias: categoriasArray, // La lista completa y ordenada
            chartGastos: chartGastos,
        };
    }, [data]);

    return {
        ...processedData,
        data, 
        isInitialLoadComplete, 
    };
};


// ----------------------------------------------------------------------
// 🖥️ COMPONENTE PRINCIPAL (Dashboard)
// ----------------------------------------------------------------------
const Dashboard = () => {
  const { totalIngresos, totalGastos, balanceNeto, numCategorias, categorias, chartGastos, data, isInitialLoadComplete } = useDashboardData();
  
  const formatCurrency = (value: number) => 
      `$${value.toLocaleString('es-CO', { minimumFractionDigits: 0 })}`;

  const getBalanceColor = (value: number) => {
    if (value > 0) return 'text-green-600 bg-green-50';
    if (value < 0) return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  }

  // ESTADO 1: Cargando (mientras verifica localStorage)
  if (!isInitialLoadComplete) {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <p className="text-xl font-semibold text-gray-600">Verificando reportes guardados...</p>
        </div>
    );
  }

  // ESTADO 2: Sin datos (localStorage verificado y vacío) -> Muestra el aviso
  if (data === null) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-100 flex flex-col justify-center items-center p-8">
                <div className="text-center bg-white p-10 rounded-xl shadow-2xl max-w-md">
                    <Upload size={48} className="mx-auto h-12 w-12 text-indigo-500" />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">¡Sube tu primer archivo!</h2>
                    <p className="mt-2 text-gray-600">
                        No se encontró ningún reporte financiero analizado en el historial local. Por favor, sube un archivo PDF para comenzar a visualizar tus datos.
                    </p>
                    <Link 
                        to="/upload" 
                        className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                        Cargar Archivo Ahora
                    </Link>
                </div>
            </main>
        </div>
    );
  }

  // ESTADO 3: Con datos
  const top4Gastos = categorias.slice(0, 4); // Tomamos las primeras 4 categorías (las de mayor gasto)

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-100">
        <Header />

        <div className="p-4 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Resumen Financiero Mensual</h1>
            
            {/* A. MÉTRICAS CLAVE (KPIs) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                <DashboardCard 
                    title="Total Ingresos (Reporte IA)" 
                    value={formatCurrency(totalIngresos)} 
                    color="bg-green-600"
                />
                <DashboardCard 
                    title="Total Gastos (Reporte IA)" 
                    value={formatCurrency(totalGastos)} 
                    color="bg-red-600"
                />
                <DashboardCard 
                    title="Balance Neto (Reporte IA)" 
                    value={formatCurrency(balanceNeto)} 
                    color={balanceNeto >= 0 ? "bg-indigo-600" : "bg-red-800"}
                />
                <DashboardCard 
                    title="Categorías Clasificadas" 
                    value={numCategorias.toString()} 
                    color="bg-gray-600"
                />
            </div>

            {/* ----------------------------------------------------------- */}
            {/* 💡 B.1 TOP 4 CATEGORÍAS DE MAYOR GASTO */}
            {top4Gastos.length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                    <h2 className="text-xl font-bold mb-4 text-red-700 flex items-center">
                        <DollarSign size={20} className="mr-2" /> Top 4 Categorías de Mayor Gasto
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {top4Gastos.map((cat, index) => (
                            <div key={cat.nombre} className="border border-red-200 p-4 rounded-lg bg-red-50">
                                <p className="text-xs font-medium text-red-600 uppercase">
                                    {index + 1}. {cat.nombre}
                                </p>
                                <p className="text-lg font-bold text-red-800 mt-1">
                                    {formatCurrency(cat.totalGasto)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* ----------------------------------------------------------- */}

            {/* C. GRÁFICA DE PASTEL Y RESUMEN LATERAL */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <PieChartActual 
                    data={chartGastos.slice(0, 8)} 
                    title="Distribución de Gastos (Top 8)" 
                />
                
                 <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-indigo-800 mb-4 border-b pb-2">Información del Análisis</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Este dashboard proporciona una visión consolidada del último extracto financiero procesado. Los datos provienen del análisis automatizado de transacciones por parte de un modelo de **Inteligencia Artificial** (IA), clasificando cada movimiento en una de **{numCategorias}** categorías.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-gray-500">Archivos procesados históricamente: 13</p>
                </div>
            </div>

            {/* D. DETALLE DE GASTOS E INGRESOS POR CATEGORÍA (Tabla) */}
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Totales por Categoría de Clasificación</h2>
            
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                                <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-green-700 uppercase tracking-wider">Total Ingresos</th>
                                <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-red-700 uppercase tracking-wider">Total Gastos</th>
                                <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-indigo-700 uppercase tracking-wider">Balance Categoría</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {categorias.map((cat) => (
                                <tr key={cat.nombre} className="hover:bg-gray-50">
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {cat.nombre}
                                    </td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-700">
                                        {formatCurrency(cat.totalIngreso)}
                                    </td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-700">
                                        {formatCurrency(cat.totalGasto)}
                                    </td>
                                    <td className={`px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-right font-bold ${getBalanceColor(cat.balanceCategoria)}`}>
                                        {formatCurrency(cat.balanceCategoria)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
      </main>
    </div>
  );
};

export default Dashboard;