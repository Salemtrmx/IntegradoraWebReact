import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignup from "./pages/Login";
import Menu from "./pages/MenuAdmin";
import MenuCuidador from "./pages/MenuCuidador";
import Recuperar from "./pages/Recuperar";
import Cuidadores from "./pages/Cuidadores";
import Medicamentos from "./pages/MedicamentosAdmin";
import RecordatoriosAdmin from "./pages/RecordatoriosAdmin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<LoginSignup />} /> 
        <Route path="/Admin" element={<Menu />} />
        <Route path="/Cuidador" element={<MenuCuidador />} /> 
        <Route path="/Admin/Cuidadores" element={<Cuidadores/>} />
        <Route path="/recuperar" element={<Recuperar/>} />
        <Route path="/Admin/Medicamentos" element={<Medicamentos/>}/>
        <Route path="/Admin/Recordatorios" element={<RecordatoriosAdmin/>} />
      </Routes>
    </Router>
  );
};

export default App;