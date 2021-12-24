import { FETCH_GAMES, FETCH_GAME, FETCH_GENDERS, FILTER_BY_GENDERS, FILTER_CREATED_DB, SORT_BY_NAME, SEARCH_BY_NAME, POST_GAME } from "../actions";

const initialState = {
    videogames: [],
    allGames: [],
    videogame: [],
    genders: [],
    error: null,
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
        case FETCH_GAME:
            return {
                ...state,
                videogame: action.payload
            }
        case POST_GAME:
            return {
                ...state
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
            const createdDbFilter = action.payload === 'myGames' ? state.allGames.filter(g => g.id.length > 8) : state.allGames.filter(g => g.id.length < 8)
            return {
                ...state,
                videogames: action.payload === 'All' ? state.allGames : createdDbFilter
            }
        case SORT_BY_NAME:
            var sortedByName;

            if (action.payload === 'asc') {
                sortedByName = state.videogames.sort((a, b) => {
                    if (a.name > b.name) return 1
                    if (b.name > a.name) return -1
                    return 0
                })
            } else if (action.payload === 'desc') {
                sortedByName = state.videogames.sort((a, b) => {
                    if (a.name > b.name) return -1
                    if (b.name > a.name) return 1
                    return 0
                })
            } else if(action.payload === 'rtgA') {
                sortedByName = state.videogames.sort((a, b) => {
                    if (a.rating < b.rating) return 1
                    if (a.rating > b.rating) return -1
                    return 0
                  })
            } else {
                sortedByName = state.videogames.sort((a, b) => {
                    if (a.rating < b.rating) return -1
                    // if (a.rating > b.rating) return  1
                    return 0
                  })
            }


            return {
                ...state,
                videogames: sortedByName
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                videogames: action.payload
            }
        default:
            return state
    }
}

