import React from "react";

const Manager = () => {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <div className="mycontainer bg-slate-200">
        <h1 className="text-4xl font-bold items-center">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span>
          <span className="text-green-700">OP/&gt;</span>
        </h1>
        <p className="text-lg text-green-900 items-center">
          Your own password manager
        </p>
        <div className="text-black flex flex-col p-4 gap-4">
          <input
            type="text"
            className="rounded-full border border-green-500 px-4 py-1"
          />
          <div className="flex w-full gap-8">
            <input
              type="text"
              className="rounded-full border border-green-500 px-4 py-1"
            />
            <input
              type="text"
              className="rounded-full border border-green-500 px-4 py-1"
            />

          </div>
            <button>Add Password</button>
        </div>
      </div>
    </>
  );
};

export default Manager;
