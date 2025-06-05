import React from "react";
import "../styles/servicios.css";
import ItemService from "./ItemService";

export default function Servicios() {
  return (
    <div id="servicios">
      <h2>Transformamos espacios con dedicación</h2>
      <div className="sections-services">
        <div>
          <img className="service-img" src="bordeadora.jpg" alt="" />
        </div>
        <div className="items-wrap">
          <ItemService
            ruta={"/empresas"}
            img={"empresas-icon.svg"}
            name={"Empresas"}
            text={
              "Proporcionamos soluciones de jardinería adaptadas a empresas, asegurando que tus áreas verdes mantengan una imagen profesional y atractiva"
            }
          />
          <ItemService
            img={"mantenimiento-icon.svg"}
            name={"Mantenimiento"}
            text={
              "Nos encargamos del cuidado integral de tus espacios verdes, asegurando que siempre luzcan saludables y atractivos para disfrutar en cualquier momento."
            }
          />
          <ItemService
            img={"poda-icon.svg"}
            name={"Poda de arboles y arbustos"}
            text={
              "Realizamos podas cuidadosas y expertas que promueven el crecimiento saludable de tus plantas, mejorando su apariencia y prolongando su vida"
            }
          />
          <ItemService
            img={"limpieza-icon.svg"}
            name={"Limpieza de terrenos"}
            text={
              "Realizamos podas cuidadosas y expertas que promueven el crecimiento saludable de tus plantas, mejorando su apariencia y prolongando su vida"
            }
          />
        </div>
      </div>
    </div>
  );
}
