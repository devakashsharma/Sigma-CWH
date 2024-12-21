import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-100 w-full flex justify-around items-center h-16">
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      {/* <ul>
        <li className="flex gap-4">
          <a className="hover:text-gray-600" href="/">Home</a>
          <a className="hover:text-gray-600" href="/">About</a>
          <a className="hover:text-gray-600" href="/">Contact</a>
        </li>
      </ul> */}
      <button className="bg-green-900 rounded-xl px-3 hover:bg-green-800">
        <a href="https://github.com/devakashsharma" className="flex justify-center items-center" target="_blank" rel="noopener noreferrer">
        <img src="public/icons/github.svg" alt="github" width={20} className="m-2 invert" />
        <span className="text-white text-sm font-bold">Github</span></a>
      </button>
    </nav>
  );
};

export default Navbar;
