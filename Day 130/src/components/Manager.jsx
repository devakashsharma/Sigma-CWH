import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  let [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("public/icons/eyecross.png")) {
      ref.current.src = "/public/icons/eye.png";
    } else {
      ref.current.src = "/public/icons/eyecross.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      {/* Main Container */}
      <div className="mycontainer w-3/4 flex flex-col items-center gap-4">
        {/* Title */}
        <h1 className="text-4xl font-bold flex items-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-green-900 text-center">
          Your own password manager
        </p>

        {/* Inputs and Button */}
        <div className="text-black flex flex-col p-4 gap-6 items-center w-full">
          {/* Input 1 */}
          <input
            value={form.site}
            onChange={handleChange}
            type="text"
            name="site"
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 px-4 py-1 w-full"
          />

          {/* Input 2 and Input 3 in a Row */}
          <div className="flex w-full gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Enter username"
              className="rounded-full border border-green-500 px-4 py-1 w-full"
            />

            <div className="relative w-full">
              <input
                value={form.password}
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Enter password"
                className="rounded-full border border-green-500 px-4 py-1 w-full"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-green-600 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  src="public/icons/eye.png"
                  alt="show"
                  width={20}
                  ref={ref}
                />
              </span>
            </div>
          </div>

          {/* Add Button */}
          <button
            onClick={savePassword}
            className="flex justify-center items-center bg-green-500 text-white rounded-full gap-2 px-4 py-2 border border-green-700 hover:bg-green-400"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              className="mr-2"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords flex flex-col justify-center items-start w-full gap-4">
          <h2 className="text-2xl font-semibold text-green-900">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="w-full table-auto border border-green-500 bg-green-100 overflow-hidden rounded-md text-left">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="px-4 py-2">Site</th>
                  <th className="px-4 py-2">Username</th>
                  <th className="px-4 py-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className="px-4 py-2 border-t">
                        <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                    </td>
                    <td className="px-4 py-2 border-t">{item.username}</td>
                    <td className="px-4 py-2 border-t">{item.password}</td>
                  </tr>;
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
