import "./LogoutSection.css";
import exitIcon from "../../../../assets/icons/exit.png";

export default function LogoutSection() {
  return (
    <section className="logout-section">
      <button className="logout-section__button">
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