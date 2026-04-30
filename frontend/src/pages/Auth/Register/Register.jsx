import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

import { useAuth } from "../../../contexts/AuthContext";

export default function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
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
    <main className="register">
      <form
        className="register__card"
        onSubmit={handleRegister}
      >
        <h1>Crear Cuenta</h1>
        <p>Regístrate para comenzar</p>

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
          <span className="register__error">
            {error}
          </span>
        )}

        <button type="submit">
          Registrarse
        </button>

        <Link
          to="/login"
          className="register__link"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </form>
    </main>
  );
}