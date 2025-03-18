import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header>
      <div className="contenido-header">
        <h1>Brazalete de recordatorios</h1>
        <nav id="nav">
          <ul id="links">
            <li>
              <a href="#inicio" className="seleccionado">
                Inicio
              </a>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Registrate</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;