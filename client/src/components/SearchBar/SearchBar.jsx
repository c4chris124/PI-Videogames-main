import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { } from '../../store/actions'
import styles from './SearchBar.module.css'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    return (
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text" placeholder='Search'/>
        </div>
    )
}

export default SearchBar

{/* <div class="search__container">
    <p class="search__title">
        Go ahead, hover over search
    </p>
    <input class="search__input" type="text" placeholder="Search">
</div>

 */}