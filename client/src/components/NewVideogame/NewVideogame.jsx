import React from 'react'
import styles from './NewVideogame.module.css'

function NewVideogame() {
    return (
        <div className={styles.container} >
            <form>
                <h1>New Videogame</h1>
                <div className={styles.form_group}>
                    <input type="text" required="required" />
                    <label for="input" className={styles.control_label}>Name</label><i className={styles.bar}></i>

                    <input type="text" required="required" />
                    <label for="input" className={styles.control_label}>Description</label><i className={styles.bar}></i>

                    <input type="text" required="required" />
                    <label for="input" className={styles.control_label}>Rating</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <select>
                        <option> Value 1</option>
                        <option> Value 2</option>
                        <option> Value 3</option>
                    </select>
                    <label for="select" className={styles.control_label}>Release Date</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <textarea></textarea>
                    <label for="textarea" className={styles.control_label}>Textarea</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <select>
                        <option> Value 1</option>
                        <option> Value 2</option>
                        <option> Value 3</option>
                    </select>
                    <label for="select" className={styles.control_label}>Platforms</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <textarea></textarea>
                    <label for="textarea" className={styles.control_label}>Textarea</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <select>
                        <option> Value 1</option>
                        <option> Value 2</option>
                        <option> Value 3</option>
                    </select>
                    <label for="select" className={styles.control_label}>Genres</label><i className={styles.bar}></i>
                </div>

                <div className={styles.form_group}>
                    <textarea></textarea>
                    <label for="textarea" className={styles.control_label}>Textarea</label><i className={styles.bar}></i>
                </div>

                <div class={styles.button_container}>
                    <button type="button" className={styles.button}><span>Create</span></button>
                </div>
            </form>
        </div>
    )
}

export default NewVideogame;