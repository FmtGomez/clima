import React, { useEffect }  from "react"
import { useDispatch, useSelector } from "react-redux"
import { cityDetail } from "../../Redux/Actions"



export default function CityDetail(props){
    
  let city = useSelector(state => state.city)
  const dispatch = useDispatch()

  useEffect(()=>{
    
    dispatch(cityDetail(props.match.params.id))
  })

 
  if(!!city){

      return(
            
            <div>
            
                <div>
                    <h2> Ciudad : {city.name}</h2>
                    <p>Temperatura Actual : {Math.round(city.main.temp)} °</p>
                    <p>Velocidad del Viento : {city.wind.speed} km/s</p>
                    <p>Nubosidad : {city.clouds.all}</p>
                    <p>Latitud : {city.coord.lat}</p>
                    <p>Longitud: {city.coord.lon}</p>
                    
                </div>
            </div>
        )
  } else{
      return <h1>no hay ciudades</h1>
  }
  
}