import React, { useEffect } from "react";
import { getOneDog, cleanDog, deleteDog} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import style from './Details.module.css';
import { useState } from "react";


export default function Details() {
    const { id } = useParams();
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [disable, setDisable] = useState(true)
    
    const dog = useSelector((state) => state.dog)
    // console.log("🚀 ~ file: Details.jsx ~ line 18 ~ Details ~ dog", dog)
    const {name, image, temperament, weight, height, life_span, createInDb} = dog;
    
    useEffect(() => {
        dispatch(getOneDog(id))
        return dispatch(cleanDog())
    }, [dispatch, id])

    useEffect(() => {
        if(createInDb){
            setDisable(false)
        }else {
            setDisable(true)
        }
    },[createInDb])
    
    const handleDelete = () => {
            dispatch(deleteDog(id))
            alert('dog deleted.')
            navigate('/home')
    }

    // if (!dog.length) return <div className={style.loader}>Loading...</div>

    return(
        <div>
            {
                dog.length === 0 
                    ? (<div className={style.loader}>Loading...</div>)
                    : (
                        <div>
                            <h1>Details</h1>
                            <h3>Nombre: {name}</h3>
                            <h3>Temperamentos: {temperament}</h3>
                            <h3>Peso: {weight} Kg</h3>
                            <h3>Altura: {height} Imperials</h3>
                            <h3>Promedio de vida: {life_span}</h3>
                            <div className={style.box}>
                                <img className={style.image} src={image} alt={name} />
                            </div>
                            <div>
                                <button disabled={disable} onClick={()=>handleDelete(id)}>Delete Dog</button>
                            </div>
                        </div>
                        )
            }
        </div>
    )
}
