import axios from "axios";
export function getC() {
  return async function (dispatch) {
    var info = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: "GET_COUNTRY",
      payload: info.data,
    });
  };
}
export function createAct(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/activities", payload);
    console.log(info);
    return info;
  };
}
// export function getDetail(id) {
//   return async function (dispatch) {
//     return axios
//       .get(`http://localhost:3001/countries/${id}`)
//       .then((game) =>{
//         console.log(game.data)
//         dispatch(
            
//             game.data.name
//               ? { type: "CARD_DETAIL", payload: game.data }
//               : { type: "CARD_DETAIL", payload: game.data }
//           )
//       }
//       );
      
//   };
// }
export function getDetail(id) {
  // aca sucede la conexion entre front y back
  return async function (dispatch) {
    try {
      let nombre = await axios.get(
        `http://localhost:3001/countries/${id}`
      );
console.log(nombre)
      return dispatch({
        type: "CARD_DETAIL",
        payload: nombre.data, //
      });
    } catch (error) {
      return dispatch({
        type: "CARD_DETAIL",
        payload: error.name, //
      });
    }
  };
}
export function getNameC(name) {
  // aca sucede la conexion entre front y back
  return async function (dispatch) {
    try {
      let count = await axios.get(
        `http://localhost:3001/countries?name=` + name
      );

      return dispatch({
        type: "GET_NAME",
        payload: count.data, //
      });
    } catch (error) {
      return dispatch({
        type: "GET_NAME",
        payload: error.name, //
      });
    }
  };
}
export function getA() {
  return async function (dispatch) {
    let info = await axios.get("http://localhost:3001/activities");
    // console.log(info.data)
    return dispatch({
      type: "GET_ACT",
      payload: info.data,
    });
  };
}
export function filterByPopulation(payload) {
  return {
    type: "GET_POPULATION",
    payload,
  };
}
export function filterByActivity(payload) {
  return {
    type: "GET_ACTIVITY",
    payload,
  };
}
export function filterByContinent(payload) {
  return {
    type: "GET_CONTINENT",
    payload,
  };
}
export function filterByOrder(payload) {
  return {
    type: "GET_ORDER",
    payload,
  };
}
