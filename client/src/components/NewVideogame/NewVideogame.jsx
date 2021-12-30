import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postGame, getGenders } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './NewVideogame.module.css'
import validate from './Validation'
import {MdHighlightOff, MdReply} from 'react-icons/md'

 


function NewVideogame() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const genders = useSelector((state) => state.genders)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        background_image: "",
        description: "",
        released: "",
        rating: "",
        platforms: [],
        genders: []
    })

    useEffect(() => {
        dispatch(getGenders())
    }, [])

    const handleChange = (e) => {
        setInput((input) => {
            const newInput = {
                ...input,
                [e.target.name]: e.target.value
            }
            const errors = validate(newInput)
            setErrors(errors)
            return newInput
        })
    }

    const handleSelectPlatforms = (e) => {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelectGenders = (e) => {
        setInput({
            ...input,
            genders: [...input.genders, e.target.value]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postGame(input))
        alert('Videogame Created')
        setInput({
            name: "",
            background_image: "",
            description: "",
            released: "",
            rating: "",
            platforms: [],
            genders: []
        })
        navigate('/videogames')
    }
// to validate input values, this is to set disabled submit button by default
    const checkProperties = (obj) => {
        for (var key in obj) {
            if (obj[key] !== null && obj[key] != "")
                return false;
        }
        return true;
    }

    const handleDeletePlatforms = (platform) => {
        setInput({
            ...input,
            platforms: input.platforms.filter((p) => p !== platform)
        })
    }

    const handleDeleteGenders = (genre) => {
        setInput({
            ...input,
            genders: input.genders.filter((g) => g !== genre)
        })
    }

    return (
        <div className={styles.wrapper}>
            {console.log(Object.values(input).length)}
            <Link to='/videogames'><MdReply/>Back</Link>
        <div className={styles.container} >
            <form onSubmit={e => handleSubmit(e)} className={styles.form}>
                <h1>New Videogame</h1>
                <div className={styles.form_group}>
                    <label htmlFor="input" className={styles.control_label}>Name</label><i className={styles.bar}></i>
                    <input type="text" value={input.name} required="required" name='name' onChange={e => handleChange(e)} />
                    {errors.name ? (<p className={styles.errors}>{errors.name}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="input" className={styles.control_label}>Imagen Link</label><i className={styles.bar} placeholder=''></i>
                    <input type="text" value={input.background_image} name='background_image' onChange={e => handleChange(e)} />
                    {errors.background_image ? (<p className={styles.errors}>{errors.background_image}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="input" className={styles.control_label}>Description</label><i className={styles.bar}></i>
                    <input type="text" value={input.description} required="required" name='description' onChange={e => handleChange(e)} />
                    {errors.description ? (<p className={styles.errors}>{errors.description}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="input" className={styles.control_label}>Rating</label><i className={styles.bar}></i>
                    <input type="number" value={input.rating} required="required" name='rating' onChange={e => handleChange(e)} />
                    {errors.rating ? (<p className={styles.errors}>{errors.rating}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="select" className={styles.control_label}>Release Date</label><i className={styles.bar}></i>
                    <input type="date" value={input.released} required="required" name='released' onChange={e => handleChange(e)} />
                    {errors.released ? (<p className={styles.errors}>{errors.released}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="select" className={styles.control_label}>Platforms</label><i className={styles.bar}></i>
                    <select onChange={e => handleSelectPlatforms(e)}>
                        <option hidden> Select </option>
                        <option value='PC'> PC </option>
                        <option value='PlayStation 5'> PlayStation 5</option>
                        <option value='PlayStation 4'> PlayStation 4</option>
                        <option value='Xbox One'> Xbox One</option>
                        <option value='Xbox Series S/X'> Xbox Series S/X</option>
                        <option value='Nintendo Switch'> Nintendo Switch</option>
                    </select>
                    {/* render every option selected from select */}
                    {input.platforms.map((p) =>
                        <div key={p} className={styles.selected_items}>
                            <p>{p}</p><button onClick={() => handleDeletePlatforms(p)}><MdHighlightOff/></button>
                        </div>
                    )}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="select" className={styles.control_label}>Genres</label><i className={styles.bar}></i>
                    <select onChange={e => handleSelectGenders(e)}>
                        <option hidden> Select </option>
                        {genders.map((g) => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))}
                    </select>
                    {/* render every option selected from select */}
                    {input.genders.map((g) =>
                        <div key={g} className={styles.selected_items}>
                            <p>{g}</p>
                            <button onClick={() => handleDeleteGenders(g)}><MdHighlightOff/></button>
                        </div>
                    )}
                </div>

                <div className={styles.button_container}>
                    {(!Object.keys(errors).length && !checkProperties(input)) ? (<button type="submit" className={styles.button}><span>Create</span></button>) : <button disabled type="submit" className={`${styles.button} ${styles.disabled}`}><span>Create</span></button>}
                </div>
            </form>
        </div>
        </div>
    )
}

export default NewVideogame;