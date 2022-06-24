import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDogs, paginacion } from "../../actions";
import Card from "../../components/card/Card";
import Pagination from "../../components/pagination/Pagination";

export default function Home() {

    const pages = useSelector((state) => state.pages)
    const dogs = useSelector((state) => state.dogs)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    useEffect(() => {
        dispatch(paginacion(pages))
    }, [dispatch, dogs, pages])

    return (
        <>
            <Pagination />
            <Card />
        </>
    )
}
