import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { onSearch } from "../../Redux/Actions";
import x from "../SearchBar/SearchBar.module.css"


export default function SearchBar(){

    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    let handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(onSearch(input))
        setInput("")
    }

    let handleChance= (e)=>{
        setInput(e.target.value)

    }
   
    return(
        <form className={x.form} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder = "Ciudad..."
                className = {x.inputText}
                value={input}
                onChange={handleChance}
            />
            <input type="submit" value="agregar" className={x.agregar}/>

        </form>
    )
}