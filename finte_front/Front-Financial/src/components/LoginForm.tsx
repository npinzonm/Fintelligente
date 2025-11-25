import { useState } from "react";
import { login } from "../api/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.access_token);

      // Aquí luego haces navigate("/dashboard")
      alert("Login exitoso");
    } catch {
      setError("Error al iniciar sesión. Revisa tus credenciales.");
    }
  };

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold mb-6 text-center">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Entrar
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        ¿No tienes cuenta?
        <a href="/register" className="text-indigo-600 font-medium ml-1">
          Regístrate
        </a>
      </p>
    </div>
  );
}