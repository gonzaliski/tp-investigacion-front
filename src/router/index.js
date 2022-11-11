import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout"
import { Inicio} from "../pages/Inicio"
import { Reporte} from "../pages/Reporte"
import { Encuesta} from "../pages/Encuesta"
import EditarEncuesta from './../pages/EditarEncuesta';
function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio/>} />
          <Route path="reporte" element={<Reporte />} />
          <Route path="encuesta" element={<Encuesta />} />
          <Route path="encuesta/editar/:id" element={<EditarEncuesta />} />
        </Route>
      </Routes>
    );
  }
  
  export { AppRoutes };