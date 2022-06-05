import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getDetail} from "../../actions/actions";
// import style from "../css/Detail.module.css"

export default function Detail() {
  // const acti= useSelector((state) => state.activity)
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const states = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

console.log("estado de detail", states)
  return (
    <div>
      <div>
            <div>
              <img src={states.flags} witdh="200px" height="200px" />
              <h1> Nombre: {states.name} </h1>
              <h2>ID: {states.id} </h2>
              <h4> Continente: {states.continents} </h4>
              <h4> Capital: {states.capital} </h4>
              <h4> Subregion: {states.subregion} </h4>
              <h4> Area: {states.area} km2 </h4>
              <h4> Cantidad de poblacion: {states.population} </h4>
              <h4>
                
                Actividades turisticas:
                {states.activities ? (
                  states.activities.map((act) => {
                    return (
                      <div>
                        <h4>
                          {" "}
                          Nombre: {act.name
                            ? act.name
                            : "No posee actividad"}{" "}
                        </h4>
                        <h4>
                          {" "}
                          Nivel de dificultad:{" "}
                          {act.difficult
                            ? act.difficult
                            : "No posee actividad"}{" "}
                        </h4>
                        <h4>
                          {" "}
                          Tiempo estimado de duracion:{" "}
                          {act.duration
                            ? act.duration
                            : "No posee actividad"}{" "}
                        </h4>
                        <h4>
                          {" "}
                          Temporada:{" "}
                          {act.season ? act.season : "No posee actividad"}{" "}
                        </h4>
                      </div>
                    );
                  })
                ) : (
                  <p> "No posee actividad" </p>
                )}{" "}
              </h4>
            </div>
          
      
      </div>

      <Link to="/home">
        <button> Volver al Home </button>
      </Link>
    </div>
  );
}
