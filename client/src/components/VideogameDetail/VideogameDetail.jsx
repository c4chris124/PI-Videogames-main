import React, {useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getGamesById} from '../../store/actions'

 
function VideogameDetail() {

    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getGamesById(id))
    }, [dispatch])

    const myVideogame = useSelector((state) => state.videogame)
    console.log(myVideogame);
    return (
        <div>
            {console.log(myVideogame)}
            <Link to={'/videogames'}>Back</Link>
            {myVideogame ?
            <div>
                <img src={myVideogame.background_image} alt="" />
                <h1>{myVideogame.name}</h1> 
                <p>{myVideogame.description}</p>
                <p>{myVideogame.released}</p>
                <p>{myVideogame.rating}</p>
                <p>{myVideogame.platforms}</p>
                <p>{myVideogame.genres}</p>
            </div>   
            :  <div><p>Loading...</p></div>
        }
        </div>
    )
}

export default VideogameDetail
