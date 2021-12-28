import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchByName, loadingAction } from '../../store/actions'
import styles from './SearchBar.module.css'

function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchByName(name))
        dispatch(loadingAction(true))
        // reset input value
        setName('')
    }

    return (
        <div className={styles.search_container}>
            <input className={styles.search_input} type="text" placeholder='Search' value={name} onChange={(e) => handleInput(e)} />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar