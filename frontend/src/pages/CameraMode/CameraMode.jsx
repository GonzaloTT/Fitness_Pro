import "./CameraMode.css";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import CameraFeed from "./components/CameraFeed/CameraFeed";
import RepsCounter from "./components/RepsCounter/RepsCounter";
import FormFeedback from "./components/FormFeedback/FormFeedback";
import CameraControls from "./components/CameraControls/CameraControls";
import { useRaspberry } from "../../hooks/useRaspberry";

export default function CameraMode() {
  const { stats, connected, sendCommand } = useRaspberry();

  return (
    <MainLayout>
      <section className="camera-mode">

        {/* Indicador de conexión */}
        <div className="camera-mode__status">
          <span className={`camera-mode__dot ${connected ? "camera-mode__dot--on" : "camera-mode__dot--off"}`} />
          <span className="camera-mode__status-text">
            {connected ? "Raspberry Pi conectada" : "Buscando Raspberry Pi…"}
          </span>
        </div>

        <div className="camera-mode__feed">
          <CameraFeed connected={connected} />
        </div>

        <div className="camera-mode__bottom-row">
          <FormFeedback stats={stats} />
          <RepsCounter  stats={stats} />
        </div>

        {/* Controles también disponibles fuera del overlay para mobile */}
        <div className="camera-mode__controls-bar">
          <CameraControls sendCommand={sendCommand} paused={stats?.paused} />
        </div>

      </section>
    </MainLayout>
  );
}
