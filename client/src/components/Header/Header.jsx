import React from 'react'
import styles from './Header.module.css'
import '../../index.css'

function Header() {
    return (
        <div className={`${styles.header} ${styles.section_padding}`} id={styles.home}>
            <div className={styles.header_content}>
                <h1 className={styles.gradient__text}> Welcome to Christian's Videogame Project</h1>
                <p>Henry Individual Project</p>
            </div>
        </div>
    )
}

export default Header
// 1:09:00 header