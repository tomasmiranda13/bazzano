import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ServiceInfo from "../components/ServiceInfo";

export default function Mantenimiento() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <ServiceInfo
        img={"mantenimiento.jpg"}
        titulo={"Servicio de mantenimiento"}
        parrafo={
          "Nos ocupamos de que tu jardín se mantenga siempre verde, prolijo y lleno de vida. En Bazzano cuidamos cada detalle para que disfrutes de un espacio agradable sin preocuparte por nada: trabajamos con constancia, experiencia y las mejores herramientas para mantener tu entorno en su mejor versión."
        }
        tic={"Corte de pasto y desmalezado"}
        tic2={"Poda y orden del crecimiento"}
        tic3={"Fertilización, riego y limpieza general"}
      />
    </div>
  );
}
