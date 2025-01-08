import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-5 h-16">
      <div className="logo font-bold text-2xl">
        GetMeAChai
      </div>
      <ul className="flex justify-between items-center gap-7">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sing up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
