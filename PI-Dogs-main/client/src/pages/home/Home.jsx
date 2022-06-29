import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getDogs, paginacion } from "../../actions";
import Card from "../../components/card/Card";
import OrderByBreeds from "../../components/filters/OrderByBreeds";
import OrderByName from "../../components/filters/OrderByName";
import OrderByTemper from "../../components/filters/OrderByTemper";
import OrderByWeight from "../../components/filters/OrderByWeight";
import Pagination from "../../components/pagination/Pagination";
import SearchByName from '../../components/searchbar/SearchBar'

export default function Home() {

    const pages = useSelector((state) => state.pages)
    const dogs = useSelector((state) => state.dogs)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    }, [])

    useEffect(() => {
        dispatch(paginacion(pages))
    }, [dispatch, dogs, pages])

    return (
        <>
            <OrderByTemper/>
            <OrderByBreeds />
            <OrderByName />
            <OrderByWeight />
            <SearchByName />
            <Pagination />
            <Card />
        </>
    )
}
