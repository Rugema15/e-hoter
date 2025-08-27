import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#102136] to-[#1e3a5f] px-6 py-12'>
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">VHL GROUP</h3>
            <p className='text-[#e8f0f8] text-sm max-w-md'>
              A diversified investment company committed to delivering exceptional value through our diverse portfolio of investments in Rwanda and Kenya.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className='text-white text-sm mb-4'>
              © 2025 All rights reserved.
            </p>
            <div className='text-2xl flex items-center justify-center md:justify-end gap-4'>
              <FaFacebook className='text-[#e8f0f8] hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110' />
              <FaInstagramSquare className='text-[#e8f0f8] hover:text-white cursor-pointer transition-colors duration-300 hover:scale-110' />
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#3b5a7a] mt-8 pt-8 text-center">
          <p className="text-[#e8f0f8] text-sm">
            Building communities, creating opportunities, delivering excellence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
