import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="head">
        <div>
          <a href="#home-wrapper">
            <img src="Asset 1.png" alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#home-wrapper">INICIO</a>
          </li>
          <li>
            <a href="#servicios">SERVICIOS</a>
          </li>
          <li>
            <a href="#nosotros">NOSOTROS</a>
          </li>
          <li>GALERIA</li>
          <li>ZONAS</li>
          <li>CONTACTO</li>
        </ul>
      </nav>
    </div>
  );
}
