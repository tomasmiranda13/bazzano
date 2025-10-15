import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ServiceInfo from "../components/ServiceInfo";

export default function Podas() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <ServiceInfo
        img={"podas.jpg"}
        titulo={"Servicio de podas"}
        parrafo={
          "En Bazzano realizamos podas seguras y cuidadas para mantener la forma, la salud y el crecimiento natural de cada especie. Trabajamos con criterio técnico y respeto por el entorno, garantizando resultados prolijos y un desarrollo equilibrado del jardín."
        }
        tic={"Poda de formación y mantenimiento"}
        tic2={"Eliminación de ramas secas o peligrosas"}
        tic3={"Modelado estético y control del crecimiento"}
      />
    </div>
  );
}
