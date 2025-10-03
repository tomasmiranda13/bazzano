import React, { useEffect } from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Servicios from "../components/Servicios";
import QualityCard from "../components/QualityCard";
import History from "./History";
import Footer from "../components/Footer";
import Galeria from "../components/Galeria";
import Formulario from "../components/Formulario";
import Zonas from "../components/Zonas";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "../components/WhatsappButton";

export default function () {
  const location = useLocation();
  const navegate = useNavigate();
  const handleClick = (ruta) => {
    navegate(ruta);
    setMenuAbierto(false);
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div id="home">
      <Navbar />
      <WhatsAppButton />
      <div className="front-page">
        <div className="head-box">
          <h1>
            Cuidamos espacios, <br />
            verdes
          </h1>
          <h3>Calidad y eficacia en jardineria</h3>
          <button
            onClick={() => handleClick("/#contactanos")}
            className="front-button"
          >
            SOLICITAR PRESUPUESTO
          </button>
        </div>
      </div>
      <Servicios id="servicios" />
      <section id="nosotros">
        <h2>¿Que nos hace diferentes?</h2>
        <div className="cards-box">
          <QualityCard
            img={"tiempo-icon.svg"}
            title={"Trabajo rapido"}
            text={"Servicios ágiles para disfrutar tu jardín al instante."}
          />
          <QualityCard
            img={"compromiso-icon.svg"}
            title={"Compromiso y Calidad"}
            text={"Resultados que superan tus expectativas."}
          />
          <QualityCard
            img={"atencion-icon.svg"}
            title={"Atención Personalizada"}
            text={"Soluciones a medida que reflejan tu estilo."}
          />
          <QualityCard
            img={"sostenibilidad-icon.svg"}
            title={"Sontenibilidad"}
            text={"Prácticas que cuidan el medio ambiente"}
          />
        </div>
      </section>

      <Zonas />
      <Galeria />
      <Formulario />
      <Footer />
    </div>
  );
}
