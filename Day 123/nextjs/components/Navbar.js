import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between text-center p-5 px-10">
        <div className="text-3xl">
            Navbar
        </div>
        <div>
            <ul className="flex gap-4">
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;
