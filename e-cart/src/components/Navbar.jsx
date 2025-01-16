import React from 'react'
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/electricPro/product'>Product</NavLink>

    </div>
  )
}

export default Navbar
