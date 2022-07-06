import React from "react";
import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

export default function NotFound () {

    return (
        <div className={style.container}>
            <h2 className={style.h2}>
                <span className={style.span}>ERROR</span>
                <span className={style.span}>404</span>
            </h2>
        </div>
    )
}

// export default NotFound;