import { GET_DOGS, GET_TEMPER, ONE_DOG, PAGINACION } from "../actions";

const initialState = {
    dogsPerPage: 8,
    dogs: [],
    temper: [],
    pages: 0,
    dogsToRender: [],
    dog: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
            }
        case GET_TEMPER:
            return {
                ...state,
                temper: action.payload
            }
            case PAGINACION:
            return {
                ...state,
                dogsToRender: state.dogs.slice(action.payload, action.payload + state.dogsPerPage)
            }
            case ONE_DOG:
                return {
                    ...state,
                    dog: action.payload
                }
        default: return state;
    }
}

export default rootReducer