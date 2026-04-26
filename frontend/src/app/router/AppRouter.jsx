import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Routines from "../../pages/Routines/Routines";
import CameraMode from "../../pages/CameraMode/CameraMode"
import Statistics from "../../pages/Statistics/Statistics"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/camara" element={<CameraMode />} />
        <Route path="/estadisticas" element={<Statistics />} />
      </Routes>
    </BrowserRouter>
  );
}