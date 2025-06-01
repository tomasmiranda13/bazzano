import React from "react";
import "../styles/history.css";

export default function History() {
  return (
    <div className="history-wrapper">
      <h2>Cuidamos cada espacio verde con compromiso</h2>
      <div className="section-history">
        <div>
          <img className="history-img" src="historia.jpg" alt="" />
        </div>
        <div className="text-history">
          <h4>Nuestra historia</h4>
          <p>
            Desde 2019, en Bazzano hemos crecido continuamente en capacidad de
            trabajo, calidad de servicio y expansión geográfica. Nos enfocamos
            en la constante inversión en herramientas y maquinaria moderna para
            optimizar cada tarea, ofreciendo trabajos con menor esfuerzo, en
            menos tiempo y con un acabado impecable. <br /> <br />
            Somos una empresa dedicada a abarcar todas las necesidades que un
            espacio verde requiere. Nuestro objetivo siempre ha sido ofrecer
            soluciones integrales que cubran desde el mantenimiento regular
            hasta el diseño y la transformación de jardines. <br /> <br />A lo
            largo de los años, hemos tenido el placer de trabajar con numerosos
            clientes, tanto en el mantenimiento continuo de jardines de empresas
            como en proyectos puntuales. Más allá de ser un simple servicio de
            jardinería, nos apasiona lo que hacemos y nos esforzamos por crear
            relaciones duraderas con quienes confían en nosotros. Cada espacio
            verde es una oportunidad para demostrar nuestra dedicación y
            compromiso con la excelencia.
          </p>
        </div>
      </div>
    </div>
  );
}
