import React, { useEffect, useRef, useState } from "react";
import "../styles/servicios.css";
import ItemService from "./ItemService";

export default function Servicios() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return (
    <div id="servicios">
      <h2> Transformamos espacios con dedicación</h2>
      <div className="sections-services">
        <div>
          <img
            ref={ref}
            className={`service-img animar ${visible ? "visible" : ""}`}
            src="bordeadora.jpg"
            alt=""
          />
        </div>
        <div
          className={`items-wrap service-img animar-der ${
            visible ? "visible" : ""
          }`}
        >
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
