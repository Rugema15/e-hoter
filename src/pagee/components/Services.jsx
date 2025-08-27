import React from 'react'
import { MdWaves } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className='section-title fade-in text-[#102136] drop-shadow-lg'>What we do</h2>
        <p className='section-subtitle fade-in text-[#102136] drop-shadow-lg'>VHL Group has interests in Real Estate, Retail, Consultancy and Trading, Tourism Travel and Hospitality</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-sm border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-white hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in shadow-lg">
          <div className="text-center">
            <IoIosSend className='text-4xl text-[#102136] group-hover:text-white mx-auto mb-4 transition-colors duration-300'/>
            <h3 className="text-[#102136] font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-300">Vilimani Garden Resorts</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">Meetings, Wedding Planner, Catering, Rwanda Creating Exceptional Events, Wedding memories in our gardens</p>
          </div>
        </div>

        <div className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-sm border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in shadow-lg">
          <div className="text-center">
            <FaGripfire className='text-4xl text-[#102136] group-hover:text-white mx-auto mb-4 transition-colors duration-300'/>
            <h3 className="text-[#102136] font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-300">The Fireplace Grill</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">BBQ & Local Delicacies Quality meals. We realized that travelers would love to be served good quality meals.</p>
          </div>
        </div>

        <div className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-sm border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in shadow-lg">
          <div className="text-center">
            <FaShoppingCart className='text-4xl text-[#102136] group-hover:text-white mx-auto mb-4 transition-colors duration-300'/> 
            <h3 className="text-[#102136] font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-300">Rexcom Supermarket</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">Rexcom has been created with the changing lifestyles in mind. Whether it's the variety of goods available in retail store or delivery to your home.</p>
          </div>
        </div>
        
        <div className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-lg border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in md:col-span-2 lg:col-span-1 shadow-lg">
          <div className="text-center">
            <MdWaves className='text-4xl text-[#102136] group-hover:text-white mx-auto mb-4 transition-colors duration-300'/>
            <h3 className="text-[#102136] font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-300">Muhanzi Organic Farm in Rwanda</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">Muhanzi Organic Farm is located in Rwamagana, Eastern Province on the shores of Lake Muhazi. We are engaged in farming, mainly duck-breeding and organic produce.</p>
          </div>
        </div>
        
        <div className="group bg-white/95 backdrop-blur-sm p-8 rounded-2xl w-full max-w-lg border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in md:col-span-2 lg:col-span-1 shadow-lg">
          <div className="text-center">
            <h3 className="text-[#102136] font-semibold text-xl mb-3 group-hover:text-white transition-colors duration-300">Vilimani Business Centers in Kenya</h3>
            <p className="text-gray-700 group-hover:text-white transition-colors duration-300 leading-relaxed">Vilimani Business Center serve as retail store, Restaurants, and Special event avenue place. located in Kenya.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
