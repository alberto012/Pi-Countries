const initialState = {
    country : [],
    allCountry: [],
    allActivity:[],
    activity:[],
    detail: [],
}
function rootReducer (state= initialState, action) {
    switch (action.type){
        case "GET_COUNTRY":
        return{
            ...state,
            country: action.payload,
            allCountry: action.payload
        }
        case "GET_ACT":
        return{
            ...state,
            activity: action.payload,
            allActivity:action.payload
            
        }
        case "GET_ORDER":
            let order =
        action.payload === "desc"
          ? state.country?.sort(function (a, b) {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              } else {
                return 0;
              }
            })
          : state.country?.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              } else {
                return 0;
              }
            });
            return {
                ...state,
                country: order,
              };
              case "GET_POPULATION":
                let population =
                action.payload === "asc"
                  ? state.country?.sort(function (a, b) {
                      if (a.population < b.population) {
                        return 1;
                      }
                      if (a.population > b.population) {
                        return -1;
                      } else {
                        return 0;
                      }
                    })
                  : state.country?.sort(function (a, b) {
                      if (a.population > b.population) {
                        return 1;
                      }
                      if (a.population < b.population) {
                        return -1;
                      } else {
                        return 0;
                      }
                    });
                    return {
                        ...state,
                        country: population,
                      };
                  case "GET_ACTIVITY":
                   
                        const all = state.allActivity;
                        // console.log(all)
                        const filtrado =
                          action.payload === "all"
                            ? all
                            : all.filter((e) =>
                                e.activities?.map((e) => e.name).includes(action.payload)
                              );
                              //  console.log(filtrado) 
                              // console.log(all)
                        return {
                          ...state,
                          country: filtrado,
                        };
                        case "GET_CONTINENT":
                          const cont= state.allCountry;
                          const seven= 
                          action.payload=== "all"
                          ? cont
                          : cont.filter((e)=> e.continents=== action.payload)
                          return {
                            ...state,
                            country: seven,
                          };
                          case "GET_NAME":
                            return {
                              ...state,
                              country: action.payload,
                            };
                            case "CREATE_ACT":
                              return {
                                ...state,
                                activity: action.payload,
                              }
                              case "CARD_DETAIL":
                                return{
                                  ...state,
                                  detail:action.payload
                                }
default :
return state;
    }

}
export default rootReducer;