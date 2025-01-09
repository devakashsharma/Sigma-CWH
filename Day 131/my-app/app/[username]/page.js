// import Image from 'next/image'
import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img className="object-cover w-full h-[350px]" src="/banner.gif" />
        <div className="absolute bottom-[-60px] right-[46.3%]">
          <img
            width={120}
            className="rounded-xl border-white border"
            src="/dp.gif"
            alt="profile"
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-20 flex-col">
        <div className="font-bold text-xl capitalize">{params.username}</div>
        <div className="text-slate-300">Creating Animated art</div>
        <div className="text-slate-300">9193 members • 32 posts • $15.21/release</div>
      </div>
    </>
  );
};

export default Username;
