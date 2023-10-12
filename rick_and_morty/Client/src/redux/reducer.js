import { ADD_FAV, REMOVE_FAV,FILTER, ORDER } from './action-type'

const initialState = {
    myFavorites: [],
    allCharacters:[] // [char1, char2, char3]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };


        /* case ADD_FAV:
            return {
                ...state,
                 myFavorites: [...state.myFavorites, action.payload], 
                allCharacters:[...state.allCharacters, action.payload]
            } */


            case REMOVE_FAV:
         return { ...state, myFavorites: action.payload };


       /*  case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload) 
            } */

       
            case FILTER:
      const filteredFavorites = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredFavorites,
      };
            /* case ORDER:
    const sortedCharacters = state.myFavorite.slice().sort((a, b) => {
        if (action.payload === 'A') {
            return a.id - b.id; // Ascending order
        } else {
            return b.id - a.id; // Descending order
        }
    });
    return {
        ...state,
        myFavorite: sortedCharacters
    }; */

            case ORDER:
            // Create a copy of allCharacters to avoid mutating the original array
            const sortedCharacters = [...state.allCharacters];

            // Sorting logic based on action.payload (A for ascending, D for descending)
            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.id - b.id); // Ascending order
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.id - a.id); // Descending order
            }

            return {
                ...state,
                allCharacters: sortedCharacters,
                myFavorites: sortedCharacters.filter(char => state.myFavorites.some(fav => fav.id === char.id))
            };
        default:
            return state
    }
}

export default rootReducer;