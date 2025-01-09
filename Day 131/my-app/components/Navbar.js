"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [showdropdown, setShowdropdown] = useState(false)

  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-5 h-16">
      <Link href={"/"} className="logo font-bold text-2xl flex justify-center items-center gap-2">
        <img src="/tea.gif" alt="" width={45} />
        <span>GetMeAChai</span>
      </Link>
      {/* <ul className="flex justify-between items-center gap-7">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sing up</li>
        <li>Login</li>
      </ul> */}

      <div className="relative">
        {session && (
          <>
            <button
              onClick={() => setShowdropdown(!showdropdown)}
              onBlur={() => {
                setTimeout(() => {
                  setShowdropdown(false);
                }, 100); 
              }}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              type="button"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex flex-row items-center justify-center">
                Welcome {session.user.email}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 3"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </span>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                showdropdown ? "" : "hidden"
              } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white rounded-md dark:hover:text-white"
                  >
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white rounded-md dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white rounded-md dark:hover:text-white"
                  >
                    Earnings
                  </Link>
                </li>
                <li>
                  <Link
                  onClick={() => signOut()}
                    href="#"
                    className="block px-4 py-2 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:text-white rounded-md dark:hover:text-white"
                  >
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        {/* {session && (
          <Link href={"/profile"}>
            <Button title={"Profile"} />
          </Link>
        )} */}
        {session && (
          <Button
            onClick={() => {
              signOut();
            }}
            title={"Loggout"}
          />
        )}
        <Link href="/login">
          {/* <button
            type="button"
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Login
          </button> */}
          {!session && <Button title="Login" />}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
