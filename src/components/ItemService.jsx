import React from "react";
import "../styles/item.css";
import { useNavigate } from "react-router-dom";

export default function ItemService(props) {
  const navegate = useNavigate();
  const handleClick = (ruta) => {
    navegate(ruta);
    s;
    setMenuAbierto(false);
  };
  return (
    <div onClick={() => handleClick(props.ruta)} className="item-service">
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
