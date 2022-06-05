import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameC } from "../../actions/actions";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    e.preventDefault();
    if (!search) {
      return alert("Colocar una busqueda");
    } else {
      dispatch(getNameC(search));
      setSearch("");
      document.getElementById.value = "";
    }
    dispatch(getNameC(search));
  }
  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    
  }
  return (
    <div>
      <input
        value={search}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="Buscar"
      />
      <button type="submit" onClick={(e) => handleSearch(e)}>
        Buscar
      </button>
    </div>
  );
}
