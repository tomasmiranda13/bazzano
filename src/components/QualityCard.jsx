import React from "react";
import "../styles/card.css";

export default function QualityCard(props) {
  return (
    <div>
      <div className="card-wrapper">
        <div className="card-img">
          <img src={props.img} alt="" />
        </div>
        <div className="card-text">
          <h6>{props.title}</h6>
          <span>{props.text}</span>
        </div>
      </div>
    </div>
  );
}
