import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Landingpage.module.css'
function LandingPage() {
    return (
        <div className={styles.container}>
            <h1>Videogames</h1>
            <Link to='/videogames'>
            <button>Start</button>
            </Link>
        </div>
    )
}

export default LandingPage
