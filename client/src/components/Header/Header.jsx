import React from 'react'
import styles from './Header.module.css'
import game from '../assets/videogame.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={`${styles.header} ${styles.section_padding}`} id={styles.home}>
            <div className={styles.header_content}>
                <h1 className={styles.gradient__text}> Welcome to Christian's Videogame Project</h1>
                <p>Henry Individual Project, App using React, Redux, Node and Sequelize</p>
                <div className={styles.header_content_button}>
                    <Link to='/videogames'>
                        <button type='button'>Get Started</button>
                    </Link>
                </div>
            </div>
            <div className={styles.header_image}>
                <img src={game} alt="game" />
            </div>
        </div>
    )
}

export default Header
