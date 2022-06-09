import React from "react";
import {  NavLink } from "react-router-dom";
import s from "./Landign.module.css";
export default function Landing() {
  return (
    <div className={s.fondo}>
    <div className={s.fondo}>
    <h1 className={s.h1}>
      <span>W</span>
      <span>e</span>
      <span>l</span>
      <span>c</span>
      <span>o</span>
      <span>m</span>
      <span>e</span>
      <br />
      <span>t</span>
      <span>o</span>
      <br />
      <span>C</span>
      <span>o</span>
      <span>u</span>
      <span>n</span>
      <span>t</span>
      <span>r</span>
      <span>i</span>
      <span>e</span>
      <span>s</span>
     
     
    </h1>
  </div>
  <NavLink to="/home">
    <button className={s.botones}>Ingresar</button>
  </NavLink>
</div>
   
    //   <div className={s.back}>
         
    //   <div className={s.e}>

    
    //     <h1>Welcome</h1>
    //     <p >El mundo es nuestro</p>
    //     <p>Atrevete a conocerlo</p>
    //     <p>Ingresa Ahora</p>
    //   <h3>Henry Pi</h3>

    //   <Link to="/home">
    //     <button className={s.button}>Enter</button>
    //   </Link>
    //   <img
    //     src="https://static.wixstatic.com/media/cc5c08_ea4189562b4247b2b65b011dd6bc19b5~mv2.gif"
    //     alt="mundito"
    //   />
    //   </div>    
    // </div>
   
  );
}

