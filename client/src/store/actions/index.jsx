import axios from "axios"

export const FETCH_GAMES = "FETCH_GAMES"
export const FETCH_GAME = "FETCH_GAME"
export const FETCH_GENDERS = "FETCH_GENDERS"
export const FILTER_BY_GENDERS = "FILTER_BY_GENDERS"
export const FILTER_CREATED_DB = FILTER_CREATED_DB

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