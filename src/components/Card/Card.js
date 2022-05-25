import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { cityDelete } from "../../Redux/Actions"
import x from "../Card/Card.module.css"



export default function Card(props) {

    const dispatch = useDispatch()




    return (
        <div className={x.contenedor}>

    
            <button className={x.button} onClick={() => dispatch(cityDelete(props.id))}>X</button>
           
            <Link className={x.name} to={`/city/${props.id}`} ><h2>{props.name}</h2></Link>

            <div className={x.temp}>                                
                <div>
                    <p>Min</p>
                    <p>{props.min}°</p>
                </div>

                <div>
                    <p>Max</p>
                    <p>{props.max}°</p>
                </div>

                <div>
                    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
                </div>
            </div>

        </div>
    )
}

