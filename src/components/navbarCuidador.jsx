import React from "react";
import { User, Watch, Pill, BellRing } from "lucide-react"; 
import "../css/navbar2.css"; 

const Navbar2 = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <User size={20} /> 
            <span>Perfil</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Watch size={20} /> 
            <span>Brazaletes</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <Pill size={20} /> 
            <span>Medicamentos</span>
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            <BellRing size={20} /> 
            <span>Recordatorios</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
