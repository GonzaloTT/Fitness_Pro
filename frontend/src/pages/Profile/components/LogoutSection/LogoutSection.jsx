import "./LogoutSection.css";
import exitIcon from "../../../../assets/icons/exit.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";

export default function LogoutSection() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <section className="logout-section">
      <button
        className="logout-section__button"
        onClick={handleLogout}
      >
        <img
          src={exitIcon}
          alt="Cerrar sesión"
          className="logout-section__icon"
        />

        Cerrar Sesión
      </button>
    </section>
  );
}