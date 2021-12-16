import { FETCH_GAMES, FETCH_GENDERS, FILTER_BY_GENDERS, FILTER_CREATED_DB} from "../actions";

const initialState = {
    videogames : [],
    allGames: [],
    filteredGames : [],
    genders: [],
    error:null,
    loading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_GAMES:
            return {
                ...state,
                videogames: action.payload,
                allGames: action.payload
            }
        case FETCH_GENDERS:
            return {
                ...state,
                genders: action.payload
            }
        case FILTER_BY_GENDERS:
            const allGames = state.allGames
            const genderFilter = action.payload === 'All' ? allGames : allGames.filter((g) => g.genres.includes(action.payload))
            return {
                ...state,
                videogames: genderFilter
            }
        case FILTER_CREATED_DB:
            
            return{

            }
        default:
            return state
    }
}

