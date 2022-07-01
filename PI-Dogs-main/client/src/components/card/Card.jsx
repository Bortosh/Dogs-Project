import React from "react";
import { useSelector } from "react-redux";
import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card() {

    const dogsToRender = useSelector((state) => state.dogsToRender)
    // console.log("🚀 ~ file: Card.jsx ~ line 9 ~ Card ~ dogsToRender", dogsToRender)

    return (
        <div className={style.cardWrapper}>
            { dogsToRender.length === 0 
                ? ((<div>Loading...</div>))
                : (
                dogsToRender && dogsToRender.map(({id, name, weight, temperament, image}) => (
                    <div key={id} className={style.card}>
                        <Link to={`/details/${id}`} >
                        <p className={style.text}>Nombre: {name}</p>
                        <p className={style.text}>Peso: {weight}</p>
                        <p className={style.temper}>Temperamentos: {temperament}</p>
                        <img src={image} alt="imagen de perrito" className={style.image}/>
                        
                        </Link>
                    </div>
                )
            ))
        }
        </div>
    )
}