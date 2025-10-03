import React, { useState } from "react";
import "../styles/galeria.css";

export default function Galeria() {
  const imagenes = [
    { id: 1, url: "galeria_1.jpg" },
    { id: 2, url: "galeria_2.jpg" },
    { id: 3, url: "galeria_3.jpg" },
    { id: 4, url: "galeria_4.jpg" },
    { id: 5, url: "galeria_5.jpg" },
  ];

  const [indice, setIndice] = useState(0);
  const [modalAbierto, setModalAbierto] = useState(false);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const indiceAnterior = (indice - 1 + imagenes.length) % imagenes.length;
  const indiceSiguiente = (indice + 1) % imagenes.length;

  return (
    <div>
      <div id="galeria">
        <h2>Galeria</h2>
        <div className="carrusel">
          <button onClick={anterior} className="flecha">
            <img className="icono-galeria" src="anterior.svg" alt="" />
          </button>
          <img
            className="galeria_img display-none1"
            src={imagenes[indiceAnterior].url}
            alt={`Imagen ${indice + 1}`}
            onClick={() => setModalAbierto(true)}
          />
          <img
            className="galeria_img"
            src={imagenes[indice].url}
            alt={`Imagen ${indice + 1}`}
            onClick={() => setModalAbierto(true)}
          />
          <img
            className="galeria_img display-none"
            src={imagenes[indiceSiguiente].url}
            alt={`Imagen ${indice + 1}`}
            onClick={() => setModalAbierto(true)}
          />
          <button onClick={siguiente} className="flecha">
            <img className="icono-galeria" src="siguiente.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Modal Lightbox */}
      {modalAbierto && (
        <div className="modal">
          <span className="cerrar" onClick={() => setModalAbierto(false)}>
            &times;
          </span>
          <button className="flecha-modal" onClick={anterior}>
            &#10094;
          </button>
          <img
            className="modal-img"
            src={imagenes[indice].url}
            alt={`Imagen grande ${indice + 1}`}
          />
          <button className="flecha-modal" onClick={siguiente}>
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
