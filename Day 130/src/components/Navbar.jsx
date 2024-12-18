import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-100 flex justify-around items-center h-16">
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <ul>
        <li className="flex gap-4">
          <a className="hover:text-gray-600" href="/">Home</a>
          <a className="hover:text-gray-600" href="/">About</a>
          <a className="hover:text-gray-600" href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
