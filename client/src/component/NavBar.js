import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../style.css'

const NavBar = () => {
  const [activeBar, setActiveBar] = useState('new')

  useEffect(() => {
    const data = window.localStorage.getItem('activeBar')
    data ? setActiveBar(data) : setActiveBar('new')
  }, []);

  useEffect(() => {
    window.localStorage.setItem('activeBar', activeBar)
    console.log(activeBar)
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
                onClick={()=>{
                  setActiveBar('new')
                }}
                className={activeBar === 'new' ? 'active' : ''}
              >New</Link>
            </li>
            <li>
              <Link 
                to='/list'
                onClick={()=>{
                  setActiveBar('list')
                }}
                className={activeBar === 'list' ? 'active' : ''}
              >List</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default NavBar