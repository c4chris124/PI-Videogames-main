import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGenders, filterGamesByGenders } from '../../store/actions'
import styles from './Filters.module.css'
function Filters() {
    let genders = useSelector((state) => state.genders)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGenders())
    }, [])

    const handleFilterGender = (e) => {
        dispatch(filterGamesByGenders(e.target.value))
    }

    return (
        <div className={styles.selectdiv}>
            <label>
                <select>
                    <option hidden> Filters </option>
                    <option value='asc'>Sort Ascending</option>
                    <option value='desc'>Sort Descending</option>
                    <option value='a-z'>A - Z</option>
                    <option value='rtg'>Rating</option>
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
                <select>
                    <option hidden> My Filters </option>
                    <option value='all'>All</option>
                    <option value='mygames'>My Videogames</option>
                </select>
            </label>
        </div>
    )
}

export default Filters
