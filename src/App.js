import React from "react"
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js"
import './App.css';
import Cards from "./components/Cards/Cards.js"
import CityDetail from "./components/City/CityDetail.js";



function App() {
  return (
    
 <div className="app">
   {/* <Route path="/" component= {Nav}/>
   <Route exact path="/" component = {Cards} />
   <Route exact path="/city/:id" component={CityDetail}/> */}
   <Nav/>
   <Cards/>
   
 </div>
  );
}

export default App;
