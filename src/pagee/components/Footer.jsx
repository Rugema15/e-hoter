import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#0a1f44] px-10 py-6 flex justify-between items-center flex-wrap mt-30'>
      <p className='text-white text-sm'>
    © 2025 All rights reserved.
  </p>
  <div className=' text-lg flex items-center gap-3'>
    <FaFacebook className=' text-1xl cursor-pointer hover:text-blue-500' />
    <FaInstagramSquare  className=' text-1xl cursor-pointer hover:text-blue-500' />
  </div>

  
</div>

  )
}

export default Footer
