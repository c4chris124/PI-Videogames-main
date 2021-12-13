import axios from "axios"

export const FETCH_GAMES = "FETCH_GAMES"
export const FETCH_GENDERS = "FETCH_GENDERS"

export function fetchGames() {
    return function (dispatch) {
        axios.get("http://localhost:3001/api/videogames/")
        .then((games) => {
            dispatch({ //instead of returning the object i dispatch it at once 
                type: FETCH_GAMES,
                payload: games.data
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }
} 

export function fetchGenders() {
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

export function searchGames() {
    
}