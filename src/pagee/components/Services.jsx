import React from 'react'
import { MdWaves } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Services = () => {
  return (
   
<div class="flex flex-wrap gap-10 px-8 py-6 p-30">
  <h2 className='text-3xl font-bold text-center w-full mb-8'>What we do</h2>
  <p className='text-center w-full mb-8 text-gray-600'>VHL Group has interests in Real Estate, Retail, Consultancy and Trading, Tourism Travel and Hospitality

</p>
 
<div class="group bg-white shadow-md p-15 rounded-md w-[300px] border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer ">
<IoIosSend  class='text-3xl'/>
  
     <h3 class="text-violet-800 font-semibold text-lg mb-2 group-hover:text-white">Vilimani Garden Resorts</h3>
    <p class="text-gray-700 group-hover:text-white">Meetings, Wedding Planner, Catering, Rwanda Creating Exceptional Events, Wedding memories in our gardens</p>
  </div>

<div class="group bg-white shadow-md p-15 rounded-md w-[300px] border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer ">
  <FaGripfire class='text-3xl'/>
     <h3 class="text-violet-800 font-semibold text-lg mb-2 group-hover:text-white">The Fireplace Grill</h3>
   <p class="text-gray-700 group-hover:text-white">
BBQ & Local Delicacies Quality meals. We realized that travelers would love to be served good quality meals.</p>
  </div>


<div class="group bg-white shadow-md p-15 rounded-md w-[300px] border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer ">
  <FaShoppingCart class='text-3xl'/> 
    <h3 class="text-violet-800 font-semibold text-lg mb-2 group-hover:text-white">Rexcom Supermarket</h3>
    <p class="text-gray-700 group-hover:text-white">Rexcom has been created with the changing lifestyles in mind. Whether it’s the variety of goods available in retail store or delivery to your home..</p>
  </div>
<div class="group bg-white shadow-md p-20 rounded-md w-[460px] border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer ">
  <MdWaves class='text-3xl'/>
     <h3 class=" text-4xl text-violet-800 font-semibold text-lg mb-2 group-hover:text-white">Muhanzi Organic Farm in Rwanda</h3>
    <p class=" text-gray-700 group-hover:text-white">Muhanzi Organic Farm is located in Rwamagana, Eastern Province on the shores of Lake Muhazi. We are engaged in farming, mainly duck-breeding and organic produce.</p>
  </div>
  <div class="group bg-white shadow-md p-20 rounded-md w-[460px] border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer ">
     <h3 class="text-violet-800 font-semibold text-lg mb-2 group-hover:text-white">Vilimani Business Centers in Kenya</h3>
   <p class="text-gray-700 group-hover:text-white">
Vilimani Business Center serve as retail store, Restaurants, and Special event avenue place. located in Kenya.</p>
  </div>
</div>
       
  )
}

export default Services
