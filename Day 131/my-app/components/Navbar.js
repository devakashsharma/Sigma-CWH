"use client"

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {

  const { data: session } = useSession()

  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-5 h-16">
      <div className="logo font-bold text-2xl flex justify-center items-center gap-2">
        <img src="/tea.gif" alt="" width={45} />
        <span>GetMeAChai</span>
      </div>
      {/* <ul className="flex justify-between items-center gap-7">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sing up</li>
        <li>Login</li>
      </ul> */}

      <div>
        <Link href="/login">
          {/* <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button> */}
          <Button title="Login" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
