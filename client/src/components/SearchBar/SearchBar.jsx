import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByName } from '../../store/actions'
import styles from './SearchBar.module.css'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchByName(name))
    }

    return (
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text" placeholder='Search' onChange={(e) => handleInput(e)} />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
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