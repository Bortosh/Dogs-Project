import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'

export default function NavBar() {


    return (
        <div className={style.navbar}>
            <Link to='/home' className={style.link}>Home</Link>
            <Link to='/' className={style.link}>Landing Page</Link>
            <Link to='/createdogs' className={style.link}>crear perrito</Link>
        </div>
    )
}