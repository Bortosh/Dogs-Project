import React, { useEffect } from "react";
import { getOneDog} from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


export default function Details() {
    const { id } = useParams();
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getOneDog(id))
    }, [dispatch, id])
    
    const dog = useSelector((state) => state.dog)
    const {name, image, temperament, weight, height, life_span } = dog;
    
    return(
        <div>
            <div>
            <Link to = '/home'>
                <button>home</button>
            </Link>
        </div>
            <div>
            <h1>Details</h1>
                <h3>{name}</h3>
                <h3>{temperament}</h3>
                <h3>{weight}</h3>
                <h3>{height}</h3>
                <h3>{life_span}</h3>
                <img src={image} />
            </div>
        </div>
    )
}
