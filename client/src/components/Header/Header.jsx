import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
    return (
        <nav className=''>
            <div>
                <h1><Link to={'/videogames'}>Videogames</Link></h1>
                <h1><Link to={'/genres'}>Genres</Link></h1>
                <h1><Link to={'/videogames/new'}>New Game</Link></h1>
            </div>
            <SearchBar/>
        </nav>
    )
}

export default Header
