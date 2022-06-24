import axios from 'axios';

export const GET_DOGS = 'GET_DOGS'
export const GET_TEMPER = 'GET_TEMPER'
export const PAGINACION = 'PAGINACION'
export const ONE_DOG = 'ONE_DOG'


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

// export function getOneDog(id) {
//     return async function(dispatch) {
//         const json = axios (`http://localhost:3001/dogs/` + id)
//         return dispatch({
//             type: ONE_DOG,
//             payload: json.data
//         })
//     }
// }

export function getOneDog(id) {
    return async function(dispatch) {
        const json = await axios (`http://localhost:3001/dogs/${id}`)
        const data = await json.data
        // console.log("🚀 ~ file: index.js ~ line 52 ~ returnfunction ~ data", data)
        return dispatch({
            type: ONE_DOG,
            payload: data
        })
    }
}