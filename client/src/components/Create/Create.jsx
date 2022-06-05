import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getC, getA, createAct } from "../../actions/actions";

function validar(estado) {
  let error = {};
  if (!estado.name|| typeof estado.name!=="string") {
    error.name = " Pon un Caracter valido ";
  }
  if (!error.season) {
    error.season = "te falto algo aca!";
  }
  if (!error.countries) {
    error.countries = "wey ya";
  }
  if (!error.platforms) {
    error.duration = "anda, elige uno";
  }
  if (!error.duration) {
    error.duration = "se que puedes leerme muchachx, llena el cuadro";
  }

  if (error.difficult < 0 || error.difficult > 5) {
    error.difficult = "emmm nop, del 1 al 5";
  } else {
    error.submit = "ok";
  }
  return error;
}

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
    difficult: "",
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
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    SetErr(validar({...estado, name:  e.target.value}))
  }
  function handleSelect(e) {
    setEstado({
      ...estado,
      countries: [...estado.countries, e.target.value],
    });
  }
  function handleCheck(e) {
    if (e.target.checked) {
      setEstado({
        ...estado,
        season: [...estado.season, e.target.value],
      });
    }else if(e.target.name=== "duration"){ setEstado({
      ...estado,
      duration: e.target.value,
    });} else{
      setEstado({
        ...estado,
        season:estado.season?.filter(s=>s!== e.target.value)
      })
    }
  }
  function handleCheckDif(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      difficult: e.target.value,
    });
    SetErr(validar({...estado, difficult: e.target.value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
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
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <div>
            <label>Nombre de Actividad: </label>
            <input
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
              
            />
           {err.name}
          </div>
          <div>
            <label>Dificultad: </label>
            <select onChange={(e) => handleCheckDif(e)}>
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
             {err.difficult}
            </select>
          </div>
          <div>
            <label>Duración: </label>
            <input
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
                type="checkbox"
                name={estado.season}
                value="Spring"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
              Verano:
              <input
                type="checkbox"
                name={estado.season}
                value="Summer"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            <label>
              Otoño:
              <input
                type="checkbox"
                name={estado.season}
                value="Autumn"
                onChange={(e) => handleCheck(e)}
              />{" "}
            </label>
            <label>
              Invierno:
              <input
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
            <select onChange={(e) => handleSelect(e)}>
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
          //   className={s.dis}
          >
            <button
            onClick={(e) => handleSubmit(e)}
            >
              Crealo!
            </button>
            <Link to="/home">
              <button
              //   className={s.buttons}
              >
                Volver
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
