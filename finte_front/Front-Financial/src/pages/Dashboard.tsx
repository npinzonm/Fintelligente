import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* CONTENIDO */}
      <main className="flex-1 ml-0 md:ml-64 min-h-screen bg-gray-100">
        <Header />

        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard title="Gastos totales" value="$2,100" />
          <DashboardCard title="Categorías" value="8" />
          <DashboardCard title="Archivos procesados" value="13" />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;