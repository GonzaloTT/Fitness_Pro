import "./CameraFeed.css";

import RepsCounter from "../RepsCounter/RepsCounter";
import FormFeedback from "../FormFeedback/FormFeedback";
import CameraControls from "../CameraControls/CameraControls";

export default function CameraFeed() {
  return (
    <section className="camera-feed">
      <div className="camera-feed__video">
        Camera Feed Placeholder
      </div>
      <div className="camera-feed__controls-overlay">
        <CameraControls />
      </div>
    </section>
  );
}