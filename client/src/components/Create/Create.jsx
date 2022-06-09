import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getC, getA, createAct } from "../../actions/actions";
import s from "./Create.module.css";

// function validar(estado) {
//   let error = {};
//   if (!estado.name || typeof estado.name !== "string"|| estado.name!=="") {
//     error.name = " Pon un Caracter valido ";
//   }else {
//     error.name = "ok";
//   }
//   if (!error.season) {
//     error.season = "te falto algo aca!";
//   }else {
//     error.season = "ok";
//   }
//   if (!error.countries) {
//     error.countries = "wey ya";
//   }else {
//     error.countries = "ok";
//   }
  
//   if (!error.duration) {
//     error.duration = "se que puedes leerme muchachx, llena el cuadro";
//   }else {
//     error.duration = "ok";
//   }

//   if (error.difficult < 0 || error.difficult > 5) {
//     error.difficult = "emmm nop, del 1 al 5";
//   } else {
//     error.difficult = "ok";
//   }
//   if(error.name==="ok"
//     // ==="ok" && error.name === "ok"&& error.duration==="ok" && error.season === "ok"
//     ){
//     error.submit= "okey"
//   }else{error.submit= "no okey"}
//   return error;
// }
const inputValidate = (estado) => {
  let errors = {};
  if(!isNaN(Number(estado.name))) {
  errors.name = 'The name of the Activities cannot contain only numbers';
} if(estado.name === "") {
  errors.name = 'The name is required';
} if(estado.name.length <2) {
  errors.name = 'Name must contain at least four (2) characters';
} 
if(!estado.difficult.length) {
  errors.difficult = `Difficult is required`;
} 
 if(estado.season.length === 0) {
  errors.season = 'You must select at least one season';
} if(!estado.duration || estado.duration === "") {
  errors.duration = `Duration is required`;
} if(estado.countries.length === 0) {
  errors.countries = 'You must select at least one country';
}
console.log("error", errors)
return errors;
};


export default function Create() {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const countries = useSelector((state) => state.country);
  const activities = useSelector((state) => state.activity);
  const countries = useSelector((state) => state.country);
  const setArr = [];

  //   plataformas.map((e) => e.platforms?.map((e) => setArr.push(e)));
  //   let newData = [...new Set(setArr)];

  const [estado, setEstado] = useState({
    name: "",
    difficult: [],
    duration: "",
    season: [],
    countries: [],
  });
  console.log(estado);
  const [err, SetErr] = useState({});

  ///eventos
  //   const handleClikDelete = (event) => {
  //     event.preventDefault();
  //     setEstado({
  //       ...estado,
  //       platforms: estado.platforms.filter(
  //         (d) => d.toLowerCase() !== event.target.value.toLowerCase()
  //       ),
  //     });
  //   };
  //   const handleClikDeleteGenre = (event) => {
  //     event.preventDefault();
  //     setEstado({
  //       ...estado,
  //       genres: estado.genres.filter(
  //         (d) => d.toLowerCase() !== event.target.value.toLowerCase()
  //       ),
  //     });
  //   };
  function handleChange(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
  }
  function handleSelect(e) {
    setEstado({
      ...estado,
      countries: [...estado.countries, e.target.value],
    });
    SetErr(inputValidate({
      ...estado,
     countries: [...estado.countries, e.target.value]
    }));
  }
  function handleCheck(e) {
    if (e.target.checked) {
      setEstado({
        ...estado,
        season: [...estado.season, e.target.value],
      });
    } else if (e.target.name === "duration") {
      setEstado({
        ...estado,
        duration: e.target.value,
      });
    } else {
      setEstado({
        ...estado,
        season: estado.season?.filter((s) => s !== e.target.value),
      });
    }
  }
  function handleCheckDif(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      difficult: e.target.value,
    });
    SetErr(inputValidate({
      ...estado,
      difficult: [...estado.difficult, e.target.value],
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
if (Object.keys(err).length)
{return alert("Faltan datos")}
    dispatch(createAct(estado));
    alert("Actividad Añadida");
    SetErr({});
    setEstado({
      name: "",
      difficult: "",
      duration: [],
      season: [],
      countries: [],
    });
  }
  useEffect(() => {
    dispatch(getC());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getA());
  }, [dispatch]);

  return (
    <div className= {s.all}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Nombre de Actividad: </label>
            <input
              className={s.input}
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {err.name}
          </div>
          <div>
            <label>Dificultad: </label>
            <select className={s.input} onChange={(e) => handleCheckDif(e)}>
                
            <option   value={0} >
                Seleccionar Dificultad
              </option>
              <option value={1} onChange={(e) => handleCheckDif(e)}>
                1
              </option>
              <option value={2} onChange={(e) => handleCheckDif(e)}>
                2
              </option>
              <option value={3} onChange={(e) => handleCheckDif(e)}>
                3
              </option>
              <option value={4} onChange={(e) => handleCheckDif(e)}>
                4
              </option>
              <option value={5} onChange={(e) => handleCheckDif(e)}>
                5
              </option>
              
            </select>
            {err.difficult}
          </div>
          <div>
            <label>Duración: </label>
            <input
              className={s.input}
              type="text"
              value={estado.duration}
              name="duration"
              //   className={s.body}
              onChange={(e) => handleChange(e)}
              // required="se te olvido algo"
            />
            {err.duration && <p>{err.duration}</p>}
          </div>
          <div>
            <label>Temporadas: </label>

            <label>
              Primavera
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Spring"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
              Verano:
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Summer"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
              Otoño:
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Autumn"
                onChange={(e) => handleCheck(e)}
              />{" "}
            </label>
            <label>
              Invierno:
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Winter"
                onChange={(e) => handleCheck(e)}
              />{" "}
            </label>
            {err.season && <p>{err.season}</p>}

            {/* {err.rating && <p>{err.rating}</p>} */}
          </div>
 
          <div>
            <label>Paises: </label>

            <select className={s.input} onChange={(e) => handleSelect(e)}>
              {countries?.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
              {err.countries}
            </select>
            <div>
              <ul>
                Paises Seleccionado:{" "}
                {estado.countries?.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={s.dis}
          >
            <button className={s.button} onClick={(e) => handleSubmit(e)}>
              Crealo!
            </button>
            <Link to="/home">
              <button className={s.button}>Volver</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
