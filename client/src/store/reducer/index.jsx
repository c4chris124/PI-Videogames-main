import { FETCH_GAMES, FETCH_GENDERS } from "../actions";

const initialState = {
    videogames : [],
    filteredGames : [],
    genders: []
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
                genders: action.payload
            }

        default:
            return state
    }
}

