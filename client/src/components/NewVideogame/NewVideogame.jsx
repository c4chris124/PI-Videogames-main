import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { postGame, getGenders } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import styles from './NewVideogame.module.css'
import validate from './Validation'



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
        <div className={styles.container} >
            <Link to='/videogames'>Back</Link>
            <form onSubmit={e => handleSubmit(e)}>
                <h1>New Videogame</h1>
                <div className={styles.form_group}>
                    <input type="text" value={input.name} required="required" name='name' onChange={e => handleChange(e)} />
                    <label htmlFor="input" className={styles.control_label}>Name</label><i className={styles.bar}></i>
                    {errors.name ? (<p>{errors.name}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <input type="text" value={input.background_image} name='background_image' onChange={e => handleChange(e)} />
                    <label htmlFor="input" className={styles.control_label}>Imagen Link</label><i className={styles.bar} placeholder=''></i>
                    {errors.background_image ? (<p>{errors.background_image}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <input type="text" value={input.description} required="required" name='description' onChange={e => handleChange(e)} />
                    <label htmlFor="input" className={styles.control_label}>Description</label><i className={styles.bar}></i>
                    {errors.description ? (<p>{errors.description}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <input type="number" value={input.rating} required="required" name='rating' onChange={e => handleChange(e)} />
                    <label htmlFor="input" className={styles.control_label}>Rating</label><i className={styles.bar}></i>
                    {errors.rating ? (<p>{errors.rating}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <input type="date" value={input.released} required="required" name='released' onChange={e => handleChange(e)} />
                    <label htmlFor="select" className={styles.control_label}>Release Date</label><i className={styles.bar}></i>
                    {errors.released ? (<p>{errors.released}</p>) : null}
                </div>

                <div className={styles.form_group}>
                    <select onChange={e => handleSelectPlatforms(e)}>
                        <option hidden> Select </option>
                        <option value='PC'> PC </option>
                        <option value='PlayStation 5'> PlayStation 5</option>
                        <option value='PlayStation 4'> PlayStation 4</option>
                        <option value='Xbox One'> Xbox One</option>
                        <option value='Xbox Series S/X'> Xbox Series S/X</option>
                        <option value='Nintendo Switch'> Nintendo Switch</option>
                    </select>
                    <label htmlFor="select" className={styles.control_label}>Platforms</label><i className={styles.bar}></i>
                    {/* render every option selected from select */}
                    {input.platforms.map((p) =>
                        <div key={p}>
                            <p>{p}</p><button onClick={() => handleDeletePlatforms(p)}>x</button>
                        </div>
                    )}
                </div>

                <div className={styles.form_group}>
                    <select onChange={e => handleSelectGenders(e)}>
                        <option hidden> Select </option>
                        {genders.map((g) => (
                            <option key={g.id} value={g.name}>{g.name}</option>
                        ))}
                    </select>
                    <label htmlFor="select" className={styles.control_label}>Genres</label><i className={styles.bar}></i>
                    {/* render every option selected from select */}
                    {input.genders.map((g) =>
                        <div key={g}>
                            <p>{g}</p>
                            <button onClick={() => handleDeleteGenders(g)}>x</button>
                        </div>
                    )}
                </div>

                <div className={styles.button_container}>
                    {(!Object.keys(errors).length) ? (<button type="submit" className={styles.button}><span>Create</span></button>) : <button disabled type="submit" className={styles.button}><span>Create</span></button> }
                    
                </div>
            </form>
        </div>
    )
}

export default NewVideogame;