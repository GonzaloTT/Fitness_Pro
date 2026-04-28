import "./CameraControls.css";
import { useNavigate } from "react-router-dom";

export default function CameraControls({ sendCommand, paused }) {
  const navigate = useNavigate();

  const handleSalir = async () => {
    await sendCommand?.("q");
    navigate("/rutinas");
  };

  return (
    <section className="camera-controls">
      <button
        className={paused ? "camera-controls__btn--active" : ""}
        onClick={() => sendCommand?.("p")}
      >
        {paused ? "Reanudar" : "Pausar"}
      </button>
      <button onClick={() => sendCommand?.("r")}>
        Reiniciar contador
      </button>
      <button onClick={handleSalir}>
        Salir del modo cámara
      </button>
    </section>
  );
}
