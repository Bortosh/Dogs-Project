import { 
    GET_DOGS, 
    GET_TEMPER, 
    ONE_DOG, 
    PAGINACION, 
    CLEAN_DOG, 
    SEARCH_BY_NAME, 
    FILTER_TEMPER, 
    FILTER_EXISTING_DOG, 
    SORT_NAME,
    SORT_WEIGHT} from "../actions";

const initialState = {
    dogsPerPage: 8,
    dogs: [],
    temper: [],
    pages: 0,
    dogsToRender: [],
    dog: [],
    allDogs: []
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
                    dog: []
                };
            case SEARCH_BY_NAME:
                return {
                    ...state,
                    dogsToRender: action.payload
                };
            case FILTER_TEMPER:
                const alldogs = state.dogs;
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
            case FILTER_EXISTING_DOG:
                if(action.payload === 'todos'){
                    return {
                        ...state,
                        dogs: [...state.allDogs]
                    }
                }else if(action.payload === 'db'){
                    return {
                        ...state,
                        dogs: state.allDogs.filter((perro) => perro.createInDb === true)
                    }
                }else{
                    return {
                        ...state,
                        dogs: state.allDogs.filter((perro) => perro.createInDb === undefined)
                    }
                }
            case SORT_NAME:
                if(action.paylaod === 'asc') {
                    return {
                        ...state,
                        dogs: [...state.dogs].sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1))
                    }
                } return{
                    ...state,
                    dogs: [...state.dogs].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)),
                    }
            case SORT_WEIGHT:
                if( action.payload === 'All'){
                    return {
                        ...state,
                        allDogs: [...state.allDogs],
                        dogs: [...state.dogs],
                    }
                }
                if( action.payload === 'small'){
                    return{
                        ...state,
                        allDogs: [...state.allDogs].sort((a, b) =>{
                            let pesoA= parseInt(a.weight.split('-')[0]);
                            let pesoB= parseInt(b.weight.split('-')[0]);
                            if(pesoA > pesoB) return 1;
                            if(pesoA < pesoB) return -1;
                            else return 0;   
                        }),
                        dogs: [...state.dogs].sort((a, b) =>{
                            let pesoA= parseInt(a.weight.split('-')[0]);
                            let pesoB= parseInt(b.weight.split('-')[0]);
                            if(pesoA > pesoB) return 1;
                            if(pesoA < pesoB) return -1;
                            else return 0;
                        })
                    }
                }
                if( action.payload === 'big'){
                    return {
                        allDogs: [...state.allDogs].sort((a, b) =>{
                            let pesoA= parseInt(a.weight.split('-')[0]);
                            let pesoB= parseInt(b.weight.split('-')[0]);
                            if(pesoA < pesoB) return 1;
                            if(pesoA > pesoB) return -1;
                            else return 0;   
                        }),
                        dogs: [...state.dogs].sort((a, b) =>{
                            let pesoA= parseInt(a.weight.split('-')[0]);
                            let pesoB= parseInt(b.weight.split('-')[0]);
                            if(pesoA < pesoB) return 1;
                            if(pesoA > pesoB) return -1;
                            else return 0;   
                        })
                    }
                    };
                    break;

        default: return state;
    }
}

export default rootReducer