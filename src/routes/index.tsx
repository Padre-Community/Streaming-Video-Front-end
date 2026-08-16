import { Route, Routes, BrowserRouter } from "react-router";
import Perfil from "../module/auth/views/Perfil.tsx";
import Login from "../module/auth/views/Login.tsx";
import Home from "../pages/Home.tsx";
import Reproducao from "../pages/Reproducao.tsx";              // junto dos outros imports

<Route path="/reproducao/:id" element={<Reproducao />} />      // dentro de <Routes>

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
}
