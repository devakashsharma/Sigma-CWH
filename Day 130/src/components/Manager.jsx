import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" });
  let [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("public/icons/eyecross.png")) {
      ref.current.src = "/public/icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "/public/icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    console.log([...passwordArray, form]);
  };

  const deletePassword = (id) => {
    console.log(`Delete password ${id}`);
    setPasswordArray(passwordArray.filter((item) => item.id != id));
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id != id)));
//     console.log([...passwordArray, form]);
  };

  const editPassword = (id) => {
    console.log(`Editing password ${id}`);
//     setPasswordArray([...passwordArray, {...form, id: uuidv4()}]);
//     localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
//     console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
                type="password"
                ref={passwordRef}
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
            className="flex justify-center items-center bg-green-500 text-black font-semibold rounded-full gap-2 px-4 py-2 border border-green-700 hover:bg-green-400"
          >
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover"
              className="mr-2"
            ></lord-icon>
            Save Password
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
                  <th className="px-4 py-2 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-4 py-2 border-t w-1/3">
                        {/* Site */}
                        <div className="flex items-centerr justify-between gap-2">
                          <a
                            href={item.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                          >
                            {item.site}
                          </a>
                          <i
                            className="fa-regular fa-copy cursor-pointer"
                            onClick={() => {
                              copyText(item.site);
                            }}
                          ></i>
                        </div>
                      </td>

                      <td className="px-4 py-2 border-t">
                        {/* Username */}
                        <div className="flex items-centerr justify-between gap-2">
                          <span>{item.username}</span>
                          <i
                            className="fa-regular fa-copy cursor-pointer"
                            onClick={() => {
                              copyText(item.username);
                            }}
                          ></i>
                        </div>
                      </td>

                      <td className="px-4 py-2 border-t">
                        {/* Password */}
                        <div className="flex items-center justify-between gap-2">
                          <span>{item.password}</span>
                          <i
                            className="fa-regular fa-copy cursor-pointer"
                            onClick={() => {
                              copyText(item.password);
                            }}
                          ></i>
                        </div>
                      </td>
                      <td className="px-4 py-2 border-t text-center">
                        <span onClick={() => {editPassword(item.id)}}>
                          <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
                        </span>
                        <span onClick={() => {deletePassword(item.id)}}>
                          <i className="fa-solid fa-trash cursor-pointer pl-4"></i>
                        </span>
                      </td>
                    </tr>
                  );
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
