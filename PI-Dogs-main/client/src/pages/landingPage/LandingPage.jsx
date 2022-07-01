import React from 'react'
import {Link} from 'react-router-dom'
import style  from './LandingPage.module.css'


export default function LandingPage() {
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>Epic Dogs</h1>
                <Link to = '/home'>
                    <button className={style.btn}>The Dog</button>
                </Link>
            </div>
        </div>
    )
}