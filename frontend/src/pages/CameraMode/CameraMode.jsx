import "./CameraMode.css";
import MainLayout from "../../components/layout/MainLayout/MainLayout";

import CameraFeed from "./components/CameraFeed/CameraFeed";
import RepsCounter from "./components/RepsCounter/RepsCounter";
import FormFeedback from "./components/FormFeedback/FormFeedback";
import CameraControls from "./components/CameraControls/CameraControls";

export default function CameraMode() {
  return (
    <MainLayout>
      <section className="camera-mode">
        <div className="camera-mode__feed">
          <CameraFeed />
        </div>

      <div className="camera-mode__bottom-row">
        <FormFeedback />
        <RepsCounter />
      </div>
      </section>
    </MainLayout>
  );
}