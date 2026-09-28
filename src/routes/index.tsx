import { Route, Routes, BrowserRouter } from "react-router";
import Perfil from "../module/auth/views/Perfil.tsx";
import Login from "../module/auth/views/Login.tsx";
import Home from "../pages/Home.tsx";
import { Username } from "../module/auth/views/Username.tsx";
import Reproduction from "../pages/Reproduction/Reproduction.tsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/username" element={<Username />} />
        <Route path="/dashboard/perfil" element={<Perfil />} />
        <Route path="/Reproduction" element={<Reproduction />} />
      </Routes>
    </BrowserRouter>
  );
}
