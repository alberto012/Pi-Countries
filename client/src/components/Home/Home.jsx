import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Home.module.css";
import {
  getC,
  filterByActivity,
  filterByContinent,
  filterByOrder,
  filterByPopulation,
  getA,
} from "../../actions/actions";
import Card from "../Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country);
  const act = useSelector((state) => state.activity);
  const secondC = useSelector((state) => state.allCountry);
  const loading = useSelector((state) => state.loading);
  const [max, setMax] = useState(9);
  const [min, setMin] = useState(0);

  const [order, setOrder] = useState("");
  const [current, setCurrent] = useState(1);
  const [countryPerPage, setCountryPerPage] = useState(10);
  const indexLc = current * countryPerPage; //15 juegos
  const indexFc = indexLc - countryPerPage; //trae al minimo
  const currentC = countries.slice(indexFc, indexLc);
  const pagination = (number) => {
    setCurrent(number);
  };
  const actSelect = [];
  act?.forEach((e) =>
    e.activities?.forEach((f) => {
      actSelect.push(f.name);
    })
  );

  const dataArr = new Set(actSelect);
  let result = [...dataArr];
  const allContinents = secondC.map((e) => e.continents);
  const dataConts = new Set(allContinents);
  let contResults = [...dataConts];

  function HandleNext(e) {
    setMax(max + 10);
    setMin(min + 10);
  }
  function HandlePrev(e) {
    setMax(max - 10);
    setMin(min - 10);
  }

  function handleReset() {
    dispatch(getC());
  }
  function handlePopulation(e) {
    e.preventDefault();
    dispatch(filterByPopulation(e.target.value));
    setOrder(e.target.value);
  }
  function handleOrder(e) {
    e.preventDefault();
    dispatch(filterByOrder(e.target.value));
    setOrder(e.target.value);
  }
  function handleContinent(e) {
    e.preventDefault();
    dispatch(filterByContinent(e.target.value));
    setOrder(e.target.value);
  }
  function handleActivity(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
    setOrder(e.target.value);
  }
  useEffect(() => {
    setMin(0);
    setMax(9);
  }, [countries]);
  useEffect(() => {
    dispatch(getC());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getA());
  }, [dispatch]);
  return (
    <>
    {!loading?
    <div> <h1 className={s.h1}> Cargando... </h1></div>:
    
 
    <div className={s.home}>
      <h1 className={s.h1}>Welcome to Country Pi</h1>
      <SearchBar />
      <NavLink to="/created">
        <button className={s.button}>Crea Actividad</button>
      </NavLink>

      <div>
        <select className={s.button} onChange={(e) => handleOrder(e)}>
          <option value="asc">Paises de A-Z</option>
          <option value="desc">Paises de Z-A</option>
        </select>
        <select className={s.button} onChange={(e) => handleContinent(e)}>
          <option key={"key"} value="all">
            Continentes
          </option>
          {contResults?.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <select className={s.button} onChange={(e) => handleActivity(e)}>
          <option value="all">todos</option>

          {result.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <select className={s.button} onChange={(e) => handlePopulation(e)}>
          <option value="asc">Mayor Poblacion</option>
          <option value="desc">Menor Poblacion</option>
        </select>
      </div>
      <button className={s.button} onClick={handleReset}>
        Reset
      </button>

      <button
        className={s.button}
        disabled={min <= 0}
        onClick={(e) => HandlePrev(e)}
      >
        prev
      </button>
      <button
        className={s.button}
        disabled={max >= countries.length - 1}
        onClick={(e) => HandleNext(e)}
      >
        next
      </button>
      <div className={s.body}>
        {countries &&
          countries.slice(min, max).map((e) => {
            return (
              <NavLink key={e.id} to={`/details/${e.id}`}>
                <Card
                  key={e.capital}
                  id={e.id}
                  name={e.name}
                  continents={e.continents}
                  flags={e.flags}
                />
              </NavLink>
            );
          })}
      </div>
      <Paginado
        countryPerPage={countryPerPage}
        countries={countries.length}
        pagination={pagination}
        setMax={setMax}
        setMin={setMin}
      />
    </div>
     }

     </>
  );
  
}

