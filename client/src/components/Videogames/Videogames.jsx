import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGames, fetchGenders, loadingAction } from '../../store/actions'
import VideogameCard from '../VideogameCard/VideogameCard'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import styles from './Videogames.module.css'
import LoadingGames from './LoadingGames'


function Videogames() {
    let games = useSelector((state) => state.videogames)
    let loading = useSelector((state) => state.loading)
    const [videogames, setVideogames] = useState([])
    // order and render in case the filter needs it
    const [order, setOrder] = useState('')
    const [currentpage, setCurrentPage] = useState(1)
    // pagination 15 per page
    const [GamesPerPage] = useState(15)

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
        dispatch(loadingAction(true))
        setVideogames(games)
    }, [])



    // reload button
    const handleReload = (e) => {
        e.preventDefault()
        dispatch(getGames())
        dispatch(loadingAction(true))
    }

    const handleOnClick = () => {
        console.log('Click');
    }

    let games2 = [
        
    ]

    return (
        <div className={styles.container}>
            <div>
                <button onClick={e => { handleReload(e) }}>reLoad</button>
                {/* passing set current page to the filter asc, desc to set page 1  */}
                <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
            </div>
            {/* cards */}
            {!loading
                ? 
                <div className={styles.cards}>
                    {currentGame?.map((game) => {
                        return <Link key={game.id} to={`/videogames/${game.id}`}><VideogameCard
                            name={game.name}
                            image={game.background_image ? game.background_image : <img src=''></img>}
                            genres={game.genres} /></Link>
                    })}
                </div>
                :
                <LoadingGames/>
                
            }
            <div>
                <Pagination gamesPerPage={GamesPerPage} Games={games.length} pagination={pagination} />
            </div>
        </div>
    )
}

export default Videogames
