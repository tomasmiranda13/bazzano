import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Servicios from "../components/Servicios";

export default function () {
  return (
    <div id="home-wrapper">
      <Navbar />
      <div className="front-page">
        <div className="head-box">
          <h1>
            Cuidamos espacios, <br />
            verdes
          </h1>
          <h3>Calidad y eficacia en jardineria</h3>
          <button className="front-button">SOLICITAR PRESUPUESTO</button>
        </div>
      </div>
      <Servicios id="servicios" />
    </div>
  );
}
