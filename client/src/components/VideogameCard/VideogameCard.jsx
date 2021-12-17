import React from 'react'
import style from './Videogame.module.css'

function VideogameCard({ name, image, genres }) {
    return (
        // <div className={style.container}>
            <div className={style.card}>
                <img className={style.card_image} src={image} alt="gameback"/>
                <div className={style.card_details}>
                    <div className={style.card_name}>{name}</div>
                    <p>{genres}</p>
                </div>
            </div>
        // </div>
    )
}

export default VideogameCard
