import React from 'react'
import '../css/Sidebar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()
  return location.pathname === '/auth' ? null : (
    <nav id='main-nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
    </nav>
  )
}

export default Sidebar