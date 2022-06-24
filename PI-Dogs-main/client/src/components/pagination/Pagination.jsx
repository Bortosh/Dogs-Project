import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './Pagination.module.css'
import { paginacion } from "../../actions";

export default function Pagination() {
    const dispatch = useDispatch()

    const dogs = useSelector((state) => state.dogs)
    // const dogsToRender = useSelector((state) => state.dogsToRender)
    const dogsPerPages = useSelector((state) => state.dogsPerPage)
    

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(dogs.length/dogsPerPages); i++) {
        pageNumber.push(i)
    }

    return(
        <nav>
            <ul className={styles.paginado}>
                { pageNumber && 
                pageNumber.map(number => (
                    <li key={number} className={styles.number}>
                        <button className={styles.btn} onClick={() => dispatch(paginacion((number - 1) * 8))}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}