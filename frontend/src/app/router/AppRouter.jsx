import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Routines from "../../pages/Routines/Routines";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rutinas" element={<Routines />} />
      </Routes>
    </BrowserRouter>
  );
}