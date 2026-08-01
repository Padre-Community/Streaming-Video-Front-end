import { Route, Routes, BrowserRouter} from "react-router";
import Home from "../module/auth/views/Home.tsx";
import Perfil from "../module/auth/views/Perfil.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard/perfil" element={<Perfil />} />
            </Routes>
        </BrowserRouter>
    );
}