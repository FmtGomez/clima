import { DELETE, DETAIL, GET_CITY } from "../Actions";


const initialState = {
    cities:[],
    city : []
}

export default function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_CITY:
            const cityfound = state.cities.find(x => x.id === action.payload.id)
            if(cityfound){
                 return alert("Ciudad Repetida")
            }else{

                return{
                    ...state,
    
                    cities: [...state.cities,action.payload]
                }
            }
        case DELETE :
            return{
                ...state,
                cities: state.cities.filter(city =>city.id !== action.payload)
            }
        case DETAIL:
        let a =  state.cities.filter(city =>city.id === parseInt(action.payload))   
            return{
                    ...state,
                    city: a[0] 
                }   
        
        default: return{...state}
    }
}