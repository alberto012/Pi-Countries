
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Home.module.css"
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
export default function Home() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country);
  const act = useSelector((state) => state.activity);
  const secondC= useSelector((state)=> state.allCountry)
  
  const [max, setMax] = useState(9);
  const [min, setMin] = useState(0);

  const [ setOrder] = useState("");

  const actSelect=[]
  act?.forEach(e=>e.activities?.forEach(f=> {actSelect.push(f.name)}))
  
  const dataArr = new Set(actSelect);
  let result = [...dataArr];
  const allContinents= secondC.map(e=>e.continents)
  const dataConts= new Set (allContinents)
  let contResults= [...dataConts]

  function HandleNext(e) {
    setMax(max + 9);
    setMin(min + 9);
  }
  function HandlePrev(e) {
    setMax(max - 9);
    setMin(min - 9);
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
    setMax(10);
  }, [countries]);
  useEffect(() => {
    dispatch(getC());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getA());
  }, [dispatch]);
  return (
    <div>
      <h1>Welcome to Country App</h1>
      <SearchBar/>
      <NavLink to= "/created"><button>Crea Actividad</button></NavLink>
      
      <div>
        <select onChange={(e) => handleOrder(e)}>
          <option value="asc">Paises de A-Z</option>
          <option value="desc">Paises de Z-A</option>
        </select>
        <select onChange={(e) => handleContinent(e)}>
          <option value="all">Continentes</option>
          {
            contResults?.map((e)=>(
              <option key={e} value={e}>{e}</option>
            ))
          }
        </select>

        <select onChange={(e) => handleActivity(e)}>
          <option value="all">todos</option>

          {result.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <select onChange={(e) => handlePopulation(e)}>
          <option value="asc">Mayor Poblacion</option>
          <option value="desc">Menor Poblacion</option>
        </select>
      </div>
      <button onClick={handleReset}>Reset</button>
      <button disabled={min <= 0} onClick={(e) => HandlePrev(e)}>
        prev
      </button>

      <button
        disabled={max >= countries.length - 1}
        onClick={(e) => HandleNext(e)}
      >
        next
      </button>
      <div className={s.body}>
      {countries &&
        countries.slice(min, max).map((e) => {
          return<NavLink  to={`/details/${e.id}`}><Card key={e.id} name={e.name} continent={e.continent} flags={e.flags} /></NavLink> ;
        })}
      </div>
      
    </div>
  );
}
