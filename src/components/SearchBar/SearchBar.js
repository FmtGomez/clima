import React, { Component, useState } from "react";
import {connect, useDispatch} from "react-redux"
import { cityDelete, onSearch } from "../../Redux/Actions";
import x from "../SearchBar/SearchBar.module.css"


export default function SearchBar(){

    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    let handleSubmit = (e)=>{
        e.preventDefault()
        if(!input) return alert("Busca una ciudad")
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
            <input type="submit" value="Buscar" className={x.agregar}/>

        </form>
    )
}



//  class SearchBar extends Component{
//     constructor(props){
//         super(props)
//         this.state = {input:""}
//     };

//  handleSubmit(e){
//     e.preventDefault();
//     this.props.onSearch(this.state.input)
// }
// handleChance(e){
// this.setState({input:e.target.value})
// }


//     render(){
//         const {input} = this.state
//         return(
//                      <form className={x.form} onSubmit={(e)=> this.handleSubmit(e)}>
//                          <input
//                              type="text"
//                              placeholder = "Ciudad..."
//                              className = {x.inputText}
//                              value={input}
//                              onChange={(e)=>this.handleChance(e)}
//                          />
//                          <input type="submit" value="agregar" className={x.agregar}/>
            
//                      </form>
//                 )
//     }
// }

// function mapStateToProps(state){
//    return {
//        cities: state.cities
//    }
// }

// function mapDispatchToProps(dispatch){
//     return{
//         onSearch: (input) => dispatch(onSearch(input)),
//         cityDelete:(id) => dispatch(cityDelete(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps) (SearchBar)



