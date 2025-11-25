const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 bg-white border-b">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hola 👋</span>
        <img
          src="https://ui-avatars.com/api/?name=User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;