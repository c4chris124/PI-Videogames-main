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

//     < nav aria - label="pagination" >
//         <ul class="pagination">
//             <li><a href=""><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a></li>
//             <li><a href=""><span class="visuallyhidden">page </span>1</a></li>
//             <li><a href="" aria-current="page"><span class="visuallyhidden">page </span>2</a></li>
//             <li><a href=""><span class="visuallyhidden">page </span>3</a></li>
//             <li><a href=""><span class="visuallyhidden">page </span>4</a></li>
//             <li><a href=""><span class="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></a></li>
//         </ul>
// </nav >
