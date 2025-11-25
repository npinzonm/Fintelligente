import { useState } from "react";
import { Menu, X, Home, FileText, User } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón móvil */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-indigo-600 p-2 rounded text-white"
      >
        <Menu size={22} />
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Cerrar menú móvil */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Fintelligente</h1>

          <nav className="mt-10 flex flex-col gap-4">
            <a href="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <Home size={20} /> Dashboard
            </a>

            <a href="/upload" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <FileText size={20} /> Cargar Archivos
            </a>

            <a href="/profile" className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
              <User size={20} /> Perfil
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;