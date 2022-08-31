import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../style.css'

const NavBar = () => {
  const [activeBar, setActiveBar] = useState('home')

  useEffect(() => {
    const data = window.localStorage.getItem('activeBar')
    data ? setActiveBar(data) : setActiveBar('home')
  }, []);

  useEffect(() => {
    window.localStorage.setItem('activeBar', activeBar)
  }, [activeBar]);

  return (
    <>
      <header>
        <h1 className='headline'>URL Shortener</h1>
        <nav>
          <ul className='nav_links'>
          <li>
            <Link 
              to='/'
              onClick={() => setActiveBar('home')}
              className={activeBar === 'home' ? 'active' : ''}
            >Home</Link>
          </li>
          <li>
            <Link 
              to='/new'
              onClick={() => setActiveBar('new')}
              className={activeBar === 'new' ? 'active' : ''}
            >New</Link>
          </li>
          <li>
            <Link 
              to='/list'
              onClick={() => setActiveBar('list')}
              className={activeBar === 'list' ? 'active' : ''}
            >List</Link>
          </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar