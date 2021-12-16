import React from 'react'
import styles from './Pagination.module.css'

function Pagination({ gamesPerPage, Games, pagination }) {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(Games / gamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles.flex}>
            <ul>
            {pageNumbers
                ? pageNumbers.map(num => (
                    <li key={num}>
                        <a href='#top' onClick={() => pagination(num)}>{num}</a>
                    </li>
                ))
                : null
            }
            <div className={styles.bar}></div>
            </ul>
        </div>


    )
}

export default Pagination

