import React from "react";
import "../styles/footer.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navegate = useNavigate();
  const handleClick = (ruta) => {
    navegate(ruta);
    setMenuAbierto(false);
  };
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img className="footer-img-logo" src="logo-horizontal.png" alt="" />
      </div>
      <div className="footer-section-wrapper">
        <div className="footer-section">
          <h6>Contacto</h6>
          <span>+598 99 555 323</span>
          <span>bazzano.jardines@gmailcom</span>
        </div>
        <div className="footer-section">
          <h6>Servicios</h6>
          <div className="footer-service-section">
            <span onClick={() => handleClick("/empresas")}>Empresas</span>
          </div>
          <div className="footer-service-section">
            <span onClick={() => handleClick("/mantenimiento")}>
              Mantenimiento
            </span>
          </div>
          <div className="footer-service-section">
            <span onClick={() => handleClick("/podas")}>
              Poda de arboles y arbustos
            </span>
          </div>
          <div className="footer-service-section">
            <span onClick={() => handleClick("/limpieza")}>
              Limpieza de terrenos
            </span>
          </div>
        </div>
        <div className="footer-section">
          <h6>Seguinos</h6>
          <div className="redes-box">
            <a>
              <img className="footer-img" src="tiktok.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/bazzano.jardineria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-img" src="instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
