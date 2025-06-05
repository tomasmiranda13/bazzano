import React from "react";
import "../styles/navbar.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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
          <NavLink className={"link-nav"} to="/#home">
            INICIO
          </NavLink>

          <NavLink className={"link-nav"} to="/#servicios">
            SERVICIOS
          </NavLink>

          <NavLink className={"link-nav"} to="/nosotros">
            NOSOTROS
          </NavLink>
          <NavLink className={"link-nav"} to="/#zonas">
            ZONAS
          </NavLink>

          <NavLink className={"link-nav"} to="/#galeria">
            GALERIA
          </NavLink>

          <NavLink className={"link-nav"} to="/#contactanos">
            CONTACTO
          </NavLink>
        </nav>
        <button className="hamburguesa" onClick={toggleMenu}>
          ☰
        </button>
      </head>
    </div>
  );
}
