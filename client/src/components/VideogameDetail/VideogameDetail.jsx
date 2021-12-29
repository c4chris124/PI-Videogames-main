import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesById, loadingAction } from '../../store/actions'
import LoadingGame from './LoadingGame'
import style from './VideogameDetail.module.css'

function VideogameDetail() {

    const dispatch = useDispatch()
    let loading = useSelector((state) => state.loading)
    const { id } = useParams()

    useEffect(() => {
        dispatch(getGamesById(id))
        dispatch(loadingAction(true))
    }, [dispatch])

    const myVideogame = useSelector((state) => state.videogame)

    return (
        <div>
            <Link to={'/videogames'}>Back</Link>
            {!loading ?
                <div className={style.container}>
                    <img src={myVideogame.background_image} alt="" />
                    <div className={style.content}>
                        <h1>{myVideogame.name}</h1>
                        <p>{myVideogame.description}</p>
                        <div className={style.content_detail}>
                            <p><label>Released: </label>{myVideogame.released}</p>
                            <p><label>Rating: </label>{myVideogame.rating}</p>
                            <p><label>Platforms: </label>{myVideogame.platforms}</p>
                            <p><label>Genres: </label>{myVideogame.genres}</p>
                        </div>
                    </div>
                </div>
                : <LoadingGame />
            }
        </div>
    )
}

export default VideogameDetail
