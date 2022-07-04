import React from "react";
import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

export default function NotFound () {

    return (
        <div className={style.container}>
            <h1>ERROR 404</h1>
            <h2>Not Found 😭</h2>
            <span>Upp, creo que estamos fuera de la App, pero solo da click {<Link to='/home'><span>aqui</span></Link>} y ya estaremos en HOME 😊</span>
            <Link to='/home' />
        </div>
    )
}

// export default NotFound;