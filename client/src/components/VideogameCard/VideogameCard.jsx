import React from 'react'
import style from './Videogame.module.css'

function VideogameCard({ name, image, genres }) {

    return (
        <div className={style.card} style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
           " &:hover": {
                backgroundImage: `url(${image})`,
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '600px',
            }
            }}>
            <div className={style.border}>
                <h2>{name}</h2>
                <div className={style.icons}>
                    <i className={style.fa} aria-hidden="true">{genres.join(' ')}</i>
                </div>
            </div>
        </div>
    )
}
// 1:41:47

export default VideogameCard

{/* 
<div class="container">
  <div class="card card0">
    <div class="border">
      <h2>Al Pacino</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="card card1">
    <div class="border">
      <h2>Ben Stiller</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  <div class="card card2">
    <div class="border">
      <h2>Patrick Stewart</h2>
      <div class="icons">
        <i class="fa fa-codepen" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-dribbble" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</div> */}