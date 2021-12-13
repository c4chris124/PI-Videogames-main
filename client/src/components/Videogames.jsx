import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchGames, fetchGenders} from '../store/actions'
import Videogame from './Videogame'

function Videogames() {
    let games = useSelector((state) => state.videogames)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames())
    }, [])

    console.log(games);
    return (
        <div>
            {games.map((game) => {
                return <Videogame key={game.id} name={game.name} image={game.background_image} genders={game.genres}/>
            })}
        </div>
    )
}

export default Videogames
