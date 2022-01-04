import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesById, loadingAction } from '../../store/actions'
import Loading from '../Loading/Loading'
import style from './VideogameDetail.module.css'
import {MdReply} from 'react-icons/md'

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
        <div className={style.wrapper}>
            <Link to={'/videogames'}><MdReply/>Back</Link>
            {console.log(myVideogame)}
            {!loading ?
                <div className={style.container}>
                    <img src={myVideogame.background_image} alt="" />
                    <div className={style.content}>
                        <h1>{myVideogame.name}</h1>
                        <p>{myVideogame.description}</p>
                        <div className={style.content_detail}>
                            <p><label>Released: </label>{myVideogame.released}</p>
                            <p><label>Rating: </label>{myVideogame.rating}</p>
                            {(typeof myVideogame.platforms === 'object')
                            ? <p><label>Platforms: </label>{myVideogame.platforms.join(', ')}</p>
                            : <p><label>Platforms: </label>{myVideogame.platforms}</p>
                        }
                        { (!myVideogame.genders) 
                            ?  <p><label>Genres: </label>{myVideogame.genres}</p>
                            :  <p><label>Genres: </label>{myVideogame.genders.map((g) => g.name).join(', ')}</p>
                        }
                            
                        </div>
                    </div>
                </div>
                : <Loading />
            }
        </div>
    )
}

export default VideogameDetail
