import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/logoHenry.png"
import SearchBar from "../SearchBar/SearchBar";
import x from "../Nav/Nav.module.css"

export default function Nav() {
    return (

        <div >

            <div>
                <nav className={x.nav}>

                    <Link className={x.logoP} to={"/"}>
                        <img className={x.logoHenry} src={img} alt="logo" />
                        <p>Henry Weather App</p>
                    </Link>
                    <div className={x.SearchBar}>
                        <SearchBar />

                    </div>
                </nav>

            </div>
        </div>
    )
} 
