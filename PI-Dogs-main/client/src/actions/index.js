import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'
export const GET_TEMPER = 'GET_TEMPER'
export const PAGINACION = 'PAGINACION'
export const ONE_DOG = 'ONE_DOG'
export const CLEAN_DOG = 'CLEAN_DOG'
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME'
export const FILTER_TEMPER = 'FILTER_TEMPER'

export function getDogs() {
    return async function(dispatch) {
        const json = await axios ('http://localhost:3001/dogs')
        return dispatch({
            type: GET_DOGS,
            payload: json.data
        })
    }
}

export function getTemper() {
    return async function(dispatch) {
        const json = await axios ('http://localhost:3001/temperaments')
        return dispatch({
            type: GET_TEMPER,
            payload: json.data
        })
    }
}

export function paginacion(payload) {
    return async function(dispatch) {
        return dispatch({
            type: PAGINACION,
            payload: payload
        })
    }
}

export function getOneDog(id) {
    return async function(dispatch) {
        const json = await axios (`http://localhost:3001/dogs/${id}`)
        const data = await json.data
        return dispatch({
            type: ONE_DOG,
            payload: data
        })
    }
}

export function searchByName(name) {
    return async (dispatch) => {
        try {
            const res = await axios('http://localhost:3001/dogs?name='+name)
            const data = res.data
            if(data) {
                return dispatch({
                    type: SEARCH_BY_NAME,
                    payload: data
                })
            }else {
                console.log('dog not found')
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export function filterTemper(payload) {
    return {
        type: FILTER_TEMPER,
        payload
    }
}

export function postDogs(payload) {
    return async function() {
        const create = await axios.post('http://localhost:3001/dogs',payload);
        return create
    }
}

export function cleanDog() {
    return {
        type: CLEAN_DOG
    }
}





























































































        // export function getOneDog(id) {
        //     return async function(dispatch) {
        //         const json = axios (`http://localhost:3001/dogs/` + id)
        //         return dispatch({
        //             type: ONE_DOG,
        //             payload: json.data
        //         })
        //     }
        // }