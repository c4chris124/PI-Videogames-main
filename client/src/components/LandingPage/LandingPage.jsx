import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Landingpage.module.css'
import Header from '../Header/Header'
function LandingPage() {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <h1>Videogames</h1>
                <Link to='/videogames'>
                    <button>Start</button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
