import { useState } from "react";
import "./CameraFeed.css";
import CameraControls from "../CameraControls/CameraControls";
import { STREAM_URL } from "../../../../hooks/useRaspberry";

export default function CameraFeed({ connected }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="camera-feed">
      <div className="camera-feed__video">
        {connected && !imgError ? (
          <img
            src={STREAM_URL}
            alt="Stream de la Raspberry Pi"
            className="camera-feed__stream"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="camera-feed__placeholder">
            <div className="camera-feed__placeholder-icon">📷</div>
            <p>{connected ? "Error al cargar el stream" : "Conectando con la Raspberry…"}</p>
          </div>
        )}
      </div>
      <div className="camera-feed__controls-overlay">
        <CameraControls />
      </div>
    </section>
  );
}
