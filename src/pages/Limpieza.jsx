import React from "react";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import ServiceInfo from "../components/ServiceInfo";

export default function Limpieza() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />

      <ServiceInfo
        img={"limpieza.jpg"}
        titulo={"Limpieza de terrenos"}
        parrafo={
          "Nos ocupamos de dejar cada terreno en condiciones, limpio y ordenado para que puedas aprovecharlo como necesites. En Bazzano realizamos limpiezas completas, retirando malezas, ramas, residuos y cualquier resto vegetal que impida el buen mantenimiento del lugar. Trabajamos con compromiso y dedicación para que tu espacio quede despejado, prolijo y listo para nuevos proyectos."
        }
        tic={"Desmalezado y retiro de residuos"}
        tic2={"Limpieza y despeje general del terreno"}
        tic3={"Preparación y nivelado del suelo"}
      />
    </div>
  );
}
