import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getGamesById, loadingAction} from '../../store/actions'
import LoadingGame from './LoadingGame'
 
function VideogameDetail() {

    const dispatch = useDispatch()
    let loading = useSelector((state) => state.loading)
    const {id} = useParams()

    useEffect(() => {
        dispatch(getGamesById(id))
        dispatch(loadingAction(true))
    }, [dispatch])

    const myVideogame = useSelector((state) => state.videogame)
    return (
        <div>
            <Link to={'/videogames'}>Back</Link>
            {!loading ?
            <div>
                <img src={myVideogame.background_image} alt="" />
                <h1>{myVideogame.name}</h1> 
                <p>{myVideogame.description}</p>
                <p>{myVideogame.released}</p>
                <p>{myVideogame.rating}</p>
                <p>{myVideogame.platforms}</p>
                <p>{myVideogame.genres}</p>
            </div>   
            :  <LoadingGame/>
        }
        </div>
    )
}

export default VideogameDetail
