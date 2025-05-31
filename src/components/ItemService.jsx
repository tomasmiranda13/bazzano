import React from "react";
import "../styles/item.css";

export default function ItemService(props) {
  return (
    <div className="item-service">
      <div>
        <img className="icon-image" src={props.img} alt="" />
      </div>

      <div>
        <h6 className="title-service">{props.name}</h6>
        <p className="text-box">{props.text}</p>
      </div>
    </div>
  );
}
