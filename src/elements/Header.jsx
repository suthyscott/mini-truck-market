import React from "react"
import '../css/Header.css'
import { useLocation } from "react-router-dom"

const Header = () => {
    const location = useLocation()
    return location.pathname === '/auth' ? null : <header id="main-header">Mini Truck Market</header>
}

export default Header
