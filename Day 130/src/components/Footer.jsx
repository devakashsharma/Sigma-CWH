import React from 'react'

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-4 bg-green-100 h-[52px]">
      <div className="logo font-bold text-2xl">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div>
        Created with &#x2764; by Akash Sharma
      </div>
    </div>
  )
}

export default Footer
