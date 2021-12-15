import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav className=''>
            <div>
                <h1><Link to={'/videogames'}>Videogames</Link></h1>
            </div>
        </nav>
    )
}

export default Header
