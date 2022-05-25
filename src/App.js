import React from "react"
import { Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js"
import './App.css';
import Cards from "./components/Cards/Cards.js"
import CityDetail from "./components/City/CityDetail.js";



function App() {
  return (
    
 <React.Fragment>
   <Route path="/" component= {Nav}/>
   <Route exact path="/" component = {Cards} />
   <Route exact path="/city/:id" component={CityDetail}/>
 </React.Fragment>
  );
}

export default App;
