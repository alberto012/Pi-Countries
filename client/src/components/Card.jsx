import React from "react";
import s from "./Card.module.css"
export default function Card({ name, continent, flags }) {
    return(
        <div className={s.body}>
            <div className={s.card}>
            <h1>{name}</h1>
            <p>{continent}</p>
            <img src={flags} alt= "banderita"/>
            </div>
           
        </div>
    )
}