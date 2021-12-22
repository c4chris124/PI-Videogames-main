import axios from "axios"

export const FETCH_GAMES = "FETCH_GAMES"
export const FETCH_GAME = "FETCH_GAME"
export const FETCH_GENDERS = "FETCH_GENDERS"
export const POST_GAME = "POST_GAME"
export const FILTER_BY_GENDERS = "FILTER_BY_GENDERS"
export const FILTER_CREATED_DB = "FILTER_CREATED_DB"
export const SORT_BY_NAME = "SORT_BY_NAME"
export const SEARCH_BY_NAME = "SEARCH_BY_NAME"

export const getGames = () => async dispatch => {
    try {
        const res = await fetch("http://localhost:3001/api/videogames/")
        const data = await res.json()
        dispatch({
            type: FETCH_GAMES,
            payload:data
        })
    } catch (error) {
        console.log(error);
    }
}

export function postGame(payload){
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3001/api/videogames', payload)
        console.log(res);
        return res
    }
}

export const getGamesById = (id) => async dispatch => {
    try {
        const res = await fetch(`http://localhost:3001/api/videogames/${id}`)
        const data = await res.json()
        dispatch({
            type: FETCH_GAME,
            payload: data
        })
    } catch (error) {
        console.log(error);
    }
}

export function getGenders() {
    return function(dispatch) { 
        axios.get("http://localhost:3001/api/genders/")
        .then((gender) => {
            dispatch({
                type: FETCH_GENDERS,
                payload: gender.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export function filterGamesByGenders(payload) {
    return {
        type: FILTER_BY_GENDERS,
        payload
    }
}

export function filterCreatedDB(payload) {
    return{
        type: FILTER_CREATED_DB,
        payload
    }
}

export function sortByName(payload) {
    return {
        type: SORT_BY_NAME,
        payload
    }
}

export function searchByName(payload){
    return async (dispatch) => {
        try {
            const res = await axios.get(`http://localhost:3001/api/videogames?name=${payload}`)
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
} 