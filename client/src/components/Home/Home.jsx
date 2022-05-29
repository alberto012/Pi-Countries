import react from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getC } from "../../actions/actions";
import AllCard from "../Card";
export default function Home() {
  const dispatch = useDispatch();
  const paises = useSelector((state) => state.country);
  function handleClick(e) {
    e.preventDefault();
    dispatch(getC());
  }
  useEffect(() => {
    dispatch(getC());
  }, [dispatch]);
  return (
    <div>
      <Link to="/create">Crea tu actividad</Link>
      <button onClick={(e) => handleClick(e)}>Recargar</button>
      <div>filtros</div>
      <AllCard/>
    </div>
  );
}
