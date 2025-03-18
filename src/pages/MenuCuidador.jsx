import React from "react";
import Navbar2 from "../components/navbarCuidador"; // Importar el componente Navbar

const MenuCuidador = () => {
  return (
    <div>
      <Navbar2 /> {/* Usar el componente Navbar aquí */}
      <h1>Mi Aplicación</h1>
      <main>
        <p>Menú Cuidador.</p>
      </main>
    </div>
  );
};

export default MenuCuidador;