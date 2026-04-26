import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Routines from "../../pages/Routines/Routines";
import CameraMode from "../../pages/CameraMode/CameraMode"
import Statistics from "../../pages/Statistics/Statistics"
import Profile from "../../pages/Profile/Profile"
import Library from "../../pages/Library/Library"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rutinas" element={<Routines />} />
        <Route path="/camara" element={<CameraMode />} />
        <Route path="/estadisticas" element={<Statistics />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/biblioteca" element={<Library />} />
      </Routes>
    </BrowserRouter>
  );
}