import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const NavBar = () => {
  const [newActive, setNewActive] = useState(true)
  const [listActive, setListActive] = useState(false)

  return (
    <div>
        <header>
        <h1 className='headline'>URL Shortener</h1>
        <nav>
          <ul className='nav_links'>
            <li>
              <Link 
                to='/'
                onClick={()=>{
                  setNewActive(true)
                  setListActive(false)
                }}
                className={newActive ? 'active' : ''}
              >New</Link>
            </li>
            <li>
              <Link 
                to='/list'
                onClick={()=>{
                  setNewActive(false)
                  setListActive(true)
                }}
                className={listActive ? 'active' : ''}
              >List</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default NavBar