import React from "react";
import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  return (
    <div>
      <head className="head">
        <div>
          <a href="#home-wrapper">
            <img src="Asset 1.png" alt="" />
          </a>
        </div>
        <nav className={`nav-links ${menuAbierto ? "activo" : ""}`}>
          <a href="#home-wrapper">INICIO</a>

          <a href="#servicios">SERVICIOS</a>

          <a href="#nosotros">NOSOTROS</a>

          <a href="#galeria">GALERIA</a>

          <a href="">ZONAS</a>
          <a href="">CONTACTO</a>
        </nav>
        <button className="hamburguesa" onClick={toggleMenu}>
          ☰
        </button>
      </head>
    </div>
  );
}
