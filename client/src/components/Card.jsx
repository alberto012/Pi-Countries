import React from "react";
// import img from "../PaginaPrincipal/tumblr_naxk2obyGN1t3m3ico1_500.gif";
// import { getVideoGames } from "../Actions/actions";
// import s from "./Card.module.css";
// import img from "./meme.png"
export default function Card({
  name,
  flags,
  continent,
  capital,
  id,
  subregion,
  area,
  poppulation,
  activity,
}) {
  // let expression =
    // /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w  .-]*)*\/?$/;

  //UTILIZO EL DISPATCH PARA HACER EL PEDIDO A LA API

  return (
    <div  key={id}>
      <div >
        <h1>{name}</h1>
        <h1>{id}</h1>
        <h1>{continent}</h1>
        <img
         
          src={flags}
          alt="holis"
          height="200"
          width="250px"
        />
        <p>{capital}</p>
        <p>{subregion}</p>
        <h1>{area}</h1>

        <p>{poppulation}</p>
        <p>{activity}</p>
      </div>
    </div>
  );
}
