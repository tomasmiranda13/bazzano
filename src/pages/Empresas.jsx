import React from "react";
import "../styles/empresas.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Empresas() {
  return (
    <div className="empresas-wrapper">
      <ScrollToTop />
      <Navbar />
      <div id="empresas">
        <h2>Servicio para empresas</h2>
        <div className="section-empresas">
          <div>
            <img className="empresas-img" src="empresas-img.png" alt="" />
          </div>
          <div className="text-empresas">
            <p>
              Ofrecemos soluciones de jardinería personalizadas para empresas,
              con servicios de mantenimiento mensual o semanal. Nos encargamos
              de que tus áreas verdes proyecten una imagen profesional y
              atractiva, siempre en óptimas condiciones.
            </p>
            <div className="tics-wrapper">
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span> Mantenimiento eficiente y de calidad</span>
              </div>
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span>Imagen cuidad y acorde a los valores de tu empresa</span>
              </div>
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span>Sostenibilidad en cada intervención</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
