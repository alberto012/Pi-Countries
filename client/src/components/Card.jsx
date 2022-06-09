import React from "react";
import s from "./Card.module.css";
export default function Card({  id, name, continents, flags }) {
  return (
    <div key={"id"} className={s.cards}>
      
          <div className={s.card}>
            <div className={s.container}>
              <img src={flags} alt="banderita" width="200px" height="200px" />
            </div>

            <div className={s.detalles}>
              <h3>{id}</h3>
              <h3>{name}</h3>
              <p>{continents}</p>
            </div>
          </div>
       
      
    </div>
  );
}
