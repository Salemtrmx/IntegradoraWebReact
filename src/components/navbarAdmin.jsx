import React from "react";
import { Menu, UserCheck, Pill, BellRing } from "lucide-react"; 
import "../css/navbar2.css"; 
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {

  let navigate=useNavigate();

  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a onClick={() => navigate("/Admin")} className="navbar__link">
            <Menu size={20} /> 
            <span>Solicitudes pendientes</span>
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={() => navigate("/Admin/Cuidadores")} className="navbar__link">
            <UserCheck size={20} /> 
            <span>Cuidadores</span>
          </a>

        </li>
        <li className="navbar__item">
          <a onClick={()=> navigate("/Admin/Medicamentos")} className="navbar__link">
            <Pill size={20} /> 
            <span>Medicamentos</span>
          </a>
        </li>
        <li className="navbar__item">
          <a onClick={()=> navigate("/Admin/Recordatorios")} className="navbar__link">
            <BellRing size={20} /> 
            <span>Recordatorios</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
