import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGames, fetchGenders, loadingAction } from '../../store/actions'
import VideogameCard from '../VideogameCard/VideogameCard'
import { Link } from 'react-router-dom'
import Filters from '../Filters/Filters'
import Pagination from '../Pagination/Pagination'
import styles from './Videogames.module.css'
import Loading from '../Loading/Loading'
import {BiRevision} from 'react-icons/bi'
import noImage from '../assets/black.png'
function Videogames() {
    let games = useSelector((state) => state.videogames)
    let loading = useSelector((state) => state.loading)
    const [videogames, setVideogames] = useState([])
    // order and render in case the filter needs it
    const [order, setOrder] = useState('')
    const [currentpage, setCurrentPage] = useState(1)
    // pagination 15 per page
    const [GamesPerPage] = useState(16)

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
    }, [])



    // reload button
    const handleReload = (e) => {
        e.preventDefault()
        dispatch(getGames())
        dispatch(loadingAction(true))
    }



    return (
        <div className={styles.container}>
                {/* passing set current page to the filter asc, desc to set page 1  */}
                <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
                <button onClick={e => { handleReload(e) }}><BiRevision/></button>

           
            {/* cards */}
            {!loading
                ? 
                <div className={styles.cards}>
                    {currentGame?.map((game) => {
                        return <Link key={game.id} to={`/videogames/${game.id}`}><VideogameCard
                            name={game.name}
                            image={game.background_image ? game.background_image : <img src={noImage}></img>}
                            genres={game.genres} /></Link>
                    })}
                </div>
                :
                <Loading/>
                
            }
            <div>
                <Pagination gamesPerPage={GamesPerPage} Games={games.length} pagination={pagination} currentpage={currentpage} />
            </div>
        </div>
    )
}

export default Videogames
