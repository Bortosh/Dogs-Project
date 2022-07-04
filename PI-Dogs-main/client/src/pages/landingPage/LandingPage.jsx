import React from 'react'
import style  from './LandingPage.module.css'
import { Doggy } from '../doggy'

export default function LandingPage() {
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>Epic Dogs</h1>
                <Doggy />
            </div>
        </div>
    )
}