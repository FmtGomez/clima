import React, { useEffect }  from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card.js";
import x from "../Cards/Cards.module.css"


export default function Cards(){
    
    const cities = useSelector(state =>state.cities)
    
    
    return(
        <div className={x.contenedor}>
        {cities.length === 0 && <h1>Por favor busca una ciudad</h1>}
            {
                cities?.map(city =>(
                    <Card
                       key = {city.id}
                       id  = {city.id}
                       min = {Math.round(city.main.temp_min)}
                       max = {Math.round(city.main.temp_max)}
                       name = {city.name}
                       img = {city.weather[0].icon} 
                    />
                ))
            }

        </div>
    )

}


