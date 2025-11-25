import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      {/* LEFT - Login form */}
      <div className="flex items-center justify-center p-10">
        <LoginForm />
      </div>

      {/* RIGHT - Branding */}
      <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Fintelligente</h1>
        <p className="text-lg opacity-90 text-center max-w-md">
          Convierte tus movimientos financieros en información clara, categorizada y automatizada con IA.
        </p>
      </div>
    </div>
  );
}