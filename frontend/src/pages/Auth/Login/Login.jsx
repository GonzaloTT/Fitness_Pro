import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";

import { useAuth } from "../../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Correo inválido");
      return;
    }

    setError("");
    login();
    navigate("/");
  };

  return (
    <main className="login">
      <form
        className="login__card"
        onSubmit={handleSubmit}
      >
        <h1>Fitness Pro</h1>
        <p>Inicia sesión para continuar</p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {error && (
          <span className="login__error">
            {error}
          </span>
        )}

        <button type="submit">
          Iniciar Sesión
        </button>
        <Link
          to="/register"
          className="login__link"
        >
          ¿No tienes cuenta? Regístrate
        </Link>
      </form>
    </main>
  );
}