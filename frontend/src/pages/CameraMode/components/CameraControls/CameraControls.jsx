import "./CameraControls.css";
import { useNavigate } from "react-router-dom";

export default function CameraControls({ sendCommand, paused }) {
  const navigate = useNavigate();

  const handlePause = () => {
    console.log("Botón Pausar/Reanudar presionado");
    console.log("Comando enviado:", "p");
    sendCommand?.("p");
  };

  const handleReset = () => {
    console.log("Botón Reiniciar contador presionado");
    console.log("Comando enviado:", "r");
    sendCommand?.("r");
  };

  const handleSalir = async () => {
    console.log("Botón Salir presionado");
    console.log("Comando enviado:", "q");

    await sendCommand?.("q");
    navigate("/rutinas");
  };

  return (
    <section className="camera-controls">
      <button
        className={paused ? "camera-controls__btn--active" : ""}
        onClick={handlePause}
      >
        {paused ? "Reanudar" : "Pausar"}
      </button>

      <button onClick={handleReset}>
        Reiniciar contador
      </button>

      <button onClick={handleSalir}>
        Salir del modo cámara
      </button>
    </section>
  );
}