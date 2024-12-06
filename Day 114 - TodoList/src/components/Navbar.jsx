import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-3 bg-indigo-800 text-white">
        <div className="logo">
            <span className="font-bold text-2xl mx-8">iTask</span>
        </div>
      <ul className="flex gap-8 mx-8">
        <li className="cursor-pointer font-semibold hover:scale-110 transition-all duration-150">Home</li>
        <li className="cursor-pointer font-semibold hover:scale-110 transition-all duration-150">Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar
