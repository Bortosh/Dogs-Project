import React from "react";
import { useSelector } from "react-redux";
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card() {

    const dogsToRender = useSelector((state) => state.dogsToRender)

    return (
        <div className={style.cardWrapper}>
            {
                dogsToRender && dogsToRender.map(({id, name, weight, temperament, image}) => (
                    <div key={id} className={style.card}>
                        <p className={style.text}>{name}</p>
                        <p className={style.text}>{weight}</p>
                        <p className={style.temper}>{temperament}</p>
                        <img src={image} alt="imagen de perrito" className={style.image}/>
                    <Link to={`/details/${id}`} >
                        ver perro
                    </Link>
                </div>
            ))
        }
        </div>
    )
}