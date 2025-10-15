import React from "react";
import "../styles/serviceinfo.css";
import Footer from "./Footer";

export default function ServiceInfo(props) {
  return (
    <div className="service-info-wrapper">
      <div id="service-info">
        <h2>{props.titulo}</h2>
        <div className="section-service-info">
          <div>
            <img className="service-info-img" src={props.img} alt="" />
          </div>
          <div className="text-service-info">
            <p>{props.parrafo}</p>
            <div className="tics-wrapper">
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span> {props.tic}</span>
              </div>
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span>{props.tic2}</span>
              </div>
              <div className="tic-box">
                <img src="tic.svg" alt="" />
                <span>{props.tic3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
