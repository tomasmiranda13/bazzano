import React from "react";
import "../styles/zonas.css";

export default function Zonas() {
  return (
    <div id="zonas">
      <div className="ubi-box">
        <img src="ubi-icon.svg" alt="" />
        <span>Montevideo</span>
      </div>
      <div className="ubi-box">
        <img src="ubi-icon.svg" alt="" />
        <span>Canelones</span>
      </div>
    </div>
  );
}
