import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-logo">
        <img className="footer-img-logo" src="logo-horizontal.png" alt="" />
      </div>
      <div className="footer-section-wrapper">
        <div className="footer-section">
          <h6>Contacto</h6>
          <span>+598 99 555 323</span>
          <span>jardineriabazzano@gmail.com</span>
        </div>
        <div className="footer-section">
          <h6>Servicios</h6>
          <div className="footer-service-section">
            <img src="" alt="" />
            <span>Empresas</span>
          </div>
          <div className="footer-service-section">
            <img src="" alt="" />
            <span>Mantenimiento</span>
          </div>
          <div className="footer-service-section">
            <img src="" alt="" />
            <span>Poda de arboles y arbustos</span>
          </div>
          <div className="footer-service-section">
            <img src="" alt="" />
            <span>Limpieza de terrenos</span>
          </div>
        </div>
        <div className="footer-section">
          <h6>Seguinos</h6>
          <div className="redes-box">
            <img className="footer-img" src="tiktok.svg" alt="" />
            <img className="footer-img" src="instagram.svg" alt="" />
            <img className="footer-img" src="facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
