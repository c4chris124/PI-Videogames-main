import { FETCH_GAMES, FETCH_GENDERS } from "../actions";

const initialState = {
    videogames : [],
    filteredGames : [],
    genres: [],
    error:null,
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case FETCH_GENDERS:
            return {
                ...state,
                genres: action.payload
            }

        default:
            return state
    }
}

