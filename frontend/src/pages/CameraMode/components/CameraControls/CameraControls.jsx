import "./CameraControls.css";
import { useNavigate } from "react-router-dom";

export default function CameraControls() {
  const navigate = useNavigate();

  return (
    <section className="camera-controls">
      <button>Pausar</button>
      <button>Reiniciar contador</button>
      <button onClick={() => navigate("/rutinas")}>Salir del modo camara</button>
    </section>
  );
}