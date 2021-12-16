import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGames, fetchGenders } from '../../store/actions'
import VideogameCard from '../VideogameCard/VideogameCard'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'

function Videogames() {
    let games = useSelector((state) => state.videogames)
    const [videogames, setVideogames] = useState([])
    const [currentpage, setCurrentPage] = useState(1)
    // pagination 15 per page
    const [GamesPerPage, setGamesPerPage] = useState(15)

    // get current videogames, by getting indexes
    
    const indexOfLastGame = currentpage * GamesPerPage
    const indexOfFirstGame = indexOfLastGame - GamesPerPage
    const currentGame = games.slice(indexOfFirstGame, indexOfLastGame)

    const pagination = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGames())
        setVideogames(games)
    }, [])



    // reload button
    const handleReload = (e) => {
        e.preventDefault()
        dispatch(getGames())
    }

    return (
        <div>
            <div>
            <button onClick={e => { handleReload(e) }}>reLoad</button>
                <Filters/>
            </div>
            {currentGame?.map((game) => {
                console.log(game.genres);
                return <VideogameCard key={game.id} name={game.name} image={game.background_image} genres={game.genres} />
            })}
            <div>
            <Pagination gamesPerPage={GamesPerPage} Games={games.length} pagination={pagination}/>
            </div>
        </div>
    )
}

export default Videogames
