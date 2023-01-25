import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css"

export default function About(){
    return(
        <div className={styles.me}>
            <div className={styles.ab} >
            <h1>Welcome to Rick & Morty's App</h1>
            <h2>Created by Sol Comba</h2>
            <p>This is my first React application!</p>
            <Link to={`/home`}><h3 className={styles.like}>I hope you enjoy it!</h3>
                </Link>
               </div> <br></br>
        </div>
    );
}