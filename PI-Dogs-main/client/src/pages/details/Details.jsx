import React, { useEffect } from "react";
import { getOneDog, cleanDog} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './Details.module.css';


export default function Details() {
    const { id } = useParams();
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getOneDog(id))
        return dispatch(cleanDog())
    }, [dispatch, id])
    
    const dog = useSelector((state) => state.dog)
    // console.log("🚀 ~ file: Details.jsx ~ line 20 ~ Details ~ dog", dog)
    const {name, image, temperament, weight, height, life_span } = dog;
    
    return(
        <div>
            {
                dog.length === 0 
                    ? (<div>Loading...</div>)
                    : (
                        <div>

                            <h1>Details</h1>
                            <h3>Nombre: {name}</h3>
                            <h3>Temperamentos: {temperament}</h3>
                            <h3>Peso: {weight}</h3>
                            <h3>Altura: {height}</h3>
                            <h3>Promedio de vida: {life_span}</h3>
                            <img className={style.image} src={image} alt={name} />
                        </div>
                        )
            }
        </div>
    )
}
