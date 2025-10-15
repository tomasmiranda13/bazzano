import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ServiceInfo from "../components/ServiceInfo";

export default function Empresas() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <ServiceInfo
        img={"empresas-img.png"}
        titulo={"Servicio para empresas"}
        parrafo={
          "Ofrecemos soluciones de jardinería personalizadas para empresas, con servicios de mantenimiento mensual o semanal. Nos encargamos de que tus áreas verdes proyecten una imagen profesional y atractiva, siempre en óptimas condiciones."
        }
        tic={"Mantenimiento eficiente y de calidad"}
        tic2={"Imagen cuidad y acorde a los valores de tu empresa"}
        tic3={"Sostenibilidad en cada intervención"}
      />
    </div>
  );
}
