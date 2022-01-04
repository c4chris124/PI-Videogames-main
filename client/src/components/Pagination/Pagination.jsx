import React from 'react'
import styles from './Pagination.module.css'

function Pagination({ gamesPerPage, Games, pagination, currentpage }) {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(Games / gamesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={styles.container}>
            <ul className={styles.pagination}>
                {pageNumbers
                    ? pageNumbers.map(num => (
                        <li key={num} className={styles.page_numbers}> 
                            <a href='#top' onClick={() => pagination(num)} id={(currentpage === num ? `${styles.active}` : '')}>{num}</a>
                        </li>
                    ))
                    : null
                }
            </ul>
            </div>

    )
}

export default Pagination
