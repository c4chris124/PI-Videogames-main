import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getGames, fetchGenders} from '../../store/actions'
import Videogame from '../Videogame/Videogame'


function Videogames() {
    // pagination 15 per page
        const [videogames, setVideogames] = useState([])
        const [currentpage, setCurrentPage] = useState(1)
        const [GamesPerPage] = useState(15)

    let games = useSelector((state) => state.videogames)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGames())
        setVideogames(games)
    }, [])
    
    // get current videgames
    const indexOfLastGame = currentpage * GamesPerPage
    const indexOfFirstGame = indexOfLastGame - GamesPerPage
    const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)

    // Change page
    const prevPage = () => {
        const newCurrentPage = currentpage - 1
        if(newCurrentPage === 0) return
        setCurrentPage(newCurrentPage)
    }

    const nextPage = () => {
        const newCurrentPage = currentpage + 1
        setCurrentPage(newCurrentPage)
    }

    return (
        <div>
            {currentGame.map((game) => {
                return <Videogame key={game.id} name={game.name} image={game.background_image} genres={game.genres}/>
            })}
            {/* hiding buttons with different conditions  */}
            {(currentpage === 1) ? null : (<button type='button' onClick={prevPage}>Previous</button>)}
            <button type='button' onClick={nextPage}>Next</button>
        </div>
    )
}

export default Videogames
