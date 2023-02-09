import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Navbar.module.css";

import { Link } from "react-router-dom";



// const Button = style.button` 
// background-color: rgb(200 0 0);
// font-weight:bold
// color: bold;
// border: 3px bold;
// border-radius: 5px
// `; 


export default function Navbar(props){
    return(
        <div className={style.container}>
            <SearchBar onSearch={props.onSearch}/>
            {/* <Button onClick={() => props.onClose(props.id)}>LogOut</Button> */}
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
        </div>
    );
}

