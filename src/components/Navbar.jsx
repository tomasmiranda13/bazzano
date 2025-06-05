import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navegate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleClick = (ruta) => {
    navegate(ruta);
    setMenuAbierto(false);
  };
  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  return (
    <div>
      <head className="head">
        <div>
          <img src="Asset 1.png" alt="" />
        </div>
        <nav className={`nav-links ${menuAbierto ? "activo" : ""}`}>
          <span onClick={() => handleClick("/#home")}>INICIO</span>

          <span onClick={() => handleClick("/#servicios")}>SERVICIOS</span>

          <span onClick={() => handleClick("/nosotros")}>NOSOTROS</span>
          <span onClick={() => handleClick("/#zonas")}>ZONAS</span>

          <span onClick={() => handleClick("/#galeria")}>GALERIA</span>

          <span onClick={() => handleClick("/#contactanos")}>CONTACTO</span>
        </nav>
        <button className="hamburguesa" onClick={toggleMenu}>
          ☰
        </button>
      </head>
    </div>
  );
}
