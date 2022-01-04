import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar_links}>
                <div className={styles.navbar_links_logo}>
                    <Link to={'/videogames'}>Videogames</Link>
                </div>
                <div className={styles.navbar_links_container}>
                   <Link to={'/genres'}>Genres</Link>
                   <Link to={'/videogames/new'}>New Game</Link>
                   <a><SearchBar/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar