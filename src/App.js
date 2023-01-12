import Menu from "./componentes/Menu";
import InicioPagina from "./paginas/InicioPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import ProgramacionPagina from "./paginas/ProgramacionPagina";
import APIPagina from "./paginas/APIPagina";
import HackingPagina from "./paginas/HackingPagina";
import VideoJuegosPagina from "./paginas/VideoJuegosPagina";
import Footer from "./componentes/Footer";
import style from "../src/style.css";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <div className="min-h container pt-4 d-flex flex-column">
          <Routes>
            <Route path="/" element={<InicioPagina />} />
            <Route path="/contacto" element={<ContactoPagina />} />
            <Route path="/hacking" element={<HackingPagina />} />
            <Route path="/programacion" element={<ProgramacionPagina />} />
            <Route path="/API" element={<APIPagina />} />
            <Route path="/VideoJuegos" element={<VideoJuegosPagina />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
