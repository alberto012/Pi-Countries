
import React from "react";
import s from "./paginado.module.css"
export default function Paginado({setMax, setMin, countryPerPage, countries, pagination }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(countries / countryPerPage)-1; i++) {
    pageNumber.push(i+1);
  }
function handlePag(number){
    setMax(9 + (10*number));
    setMin(0 + (10*number));
}
  
  return (
    <nav>
      <div>
      <ul>
      
         
        
        {pageNumber && 
        pageNumber.map(number => (
           <button className={s.button} key={number} onClick={() => handlePag(number)}>

             {number}
       
           </button>
          ))}
          
      </ul>
      </div>
      </nav>
  );
}