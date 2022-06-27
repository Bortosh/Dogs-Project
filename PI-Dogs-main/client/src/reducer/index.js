import { GET_DOGS, GET_TEMPER, ONE_DOG, PAGINACION, CLEAN_DOG, SEARCH_BY_NAME, FILTER_TEMPER } from "../actions";

const initialState = {
    dogsPerPage: 8,
    dogs: [],
    temper: [],
    pages: 0,
    dogsToRender: [],
    dog: [],
    allDogs: [],
    clean: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            };
        case GET_TEMPER:
            return {
                ...state,
                temper: action.payload
            };
            case PAGINACION:
            return {
                ...state,
                dogsToRender: state.dogs.slice(action.payload, action.payload + state.dogsPerPage)
            };
            case ONE_DOG:
                return {
                    ...state,
                    dog: action.payload
                };
            case CLEAN_DOG:
                return {
                    ...state,
                    clean: action.payload
                };
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    dogsToRender: action.payload
                };
            case FILTER_TEMPER:
                const alldogs = state.allDogs;
                const filterTemper = action.payload === 'All' ? alldogs : alldogs.filter(item => {
                    if(item.temper) {
                        if(item.temper.includes(action.payload)) {
                            return item
                        }
                    }
                return false;
                })
                return {
                    ...state,
                    dogs: filterTemper
                }

        default: return state;
    }
}

export default rootReducer