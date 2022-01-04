import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenders, filterGamesByGenders, filterCreatedDB, sortByName } from '../../store/actions'
import styles from './Filters.module.css'

function Filters({ setCurrentPage, setOrder }) {
    let genders = useSelector((state) => state.genders)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenders())
    }, [])

    const handleFilterGender = (e) => {
        dispatch(filterGamesByGenders(e.target.value))
    }

    const hadleFilterCreatedDb = (e) => {
        dispatch(filterCreatedDB(e.target.value))
    }

    const handleSort = (e) => {
        e.preventDefault()
        dispatch(sortByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Order ${e.target.value}`)
    }

    return (
        <div className={styles.selectdiv}>
            <label>
                <select onChange={e => handleSort(e)}>
                    <option hidden> Filters </option>
                    <option value='asc'>A - Z Ascending</option>
                    <option value='desc'>Z - A Descending</option>
                    <option value='rtgA'>Rating Ascending</option>
                    <option value='rtgD'>Rating Descending</option>
                </select>
            </label>

            <label>
                <select onChange={e => handleFilterGender(e)}>
                    <option hidden> Gender </option>
                    <option value='All'>All</option>
                    {genders?.map((genre) => {
                        return <option key={genre.name} value={genre.name}>{genre.name}</option>
                    })}
                </select>
            </label>

            <label>
                <select onChange={e => hadleFilterCreatedDb(e)}>
                    <option hidden> My Filters </option>
                    <option value='All'>All</option>
                    <option value='existingGames'>Existing Videogames</option>
                    <option value='myGames'>My Videogames</option>
                </select>
            </label>
        </div>
    )
}

export default Filters
