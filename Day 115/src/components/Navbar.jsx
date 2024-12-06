import React from 'react'
// import { NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/home"><li>Home</li></NavLink>
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
                <NavLink className={(e) => {return e.isActive?"red":""}} to="/login"><li>Login</li></NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
