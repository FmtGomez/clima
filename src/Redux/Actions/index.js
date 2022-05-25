
export const GET_CITY = "GET CITY"
export const DELETE = "DELETE"
export const DETAIL ="DETAIL"
const apiKey = "c87b1e12a44331bcdcd3c593c538c64b"


export  function onSearch(city){

    return function(dispath){
       return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
       .then(respose => respose.json())
       .then(json => dispath({
           type: GET_CITY,
           payload: json
       }))
    }
  
}

export function cityDelete(id){
    return{
        type: DELETE,
        payload: id
    }
}

export function cityDetail(cityId){
    return{
        type: DETAIL,
        payload: cityId
    }
}