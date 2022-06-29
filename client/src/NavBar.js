import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const NavBar = () => {
  return (
    <div>
        <header>
        <h1 className='headline'>URL Shortener</h1>
        <nav>
          <ul className='nav_links'>
            <li><Link to='/'>New</Link></li>
            <li><Link to='/list'>List</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar