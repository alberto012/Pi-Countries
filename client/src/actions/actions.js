import axios from "axios"
 export function getC (){
     return async function (dispatch){
         var info= await axios.get("http://localhost:3001/countries");
         return dispatch({
             type: "GET_COUNTRY",
             payload: info.data
         })
     }
 }