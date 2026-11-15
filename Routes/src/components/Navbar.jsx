import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex gap-50 p-5">
      <NavLink to={"/Home"}>Home</NavLink>
       <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contect"}>contect</NavLink>
    </div>
  )
}

export default Navbar
