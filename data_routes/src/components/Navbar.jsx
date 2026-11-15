import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../Pages/Home'

const Navbar = () => {
  return (
     <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  )
}

export default Navbar
