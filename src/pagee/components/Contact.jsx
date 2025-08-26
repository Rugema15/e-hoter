import React from 'react'
import { FaMapMarked } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const Contact = () => {
  return (

    <div class="flex flex-wrap gap-5 px-8 py-6 p-35 h-120 mt-30">
      <h2 className='text-3xl font-bold text-center w-full mb-8'>Contact Us</h2>

      <div class="flex flex-col items-center gap-4 p-6 group bg-white shadow-md p-15 rounded-md w-[230px] 
border border-gray-200 hover:border-blue-500 hover:bg-violet-600 
hover:scale-105 transition duration-300 cursor-pointer  ">
        <div className="flex justify-center items-center gap-3">
          <FaMapMarked class='text-3xl  text-violet-800 cursor-pointer group-hover:text-white' />
        </div>
        <h3 class="text-violet-800 font-extrabold text-lg group-hover:text-white">Physical Address​</h3>

        <p class="text-gray-700 group-hover:text-white">
          RN3 Muhazi.
          Muhazi</p>
      </div>

      <div class=" flex flex-col items-center gap-4 p-6 group bg-white shadow-md p-10 rounded-md w-[230px]  border 
border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105
 transition duration-300 cursor-pointer  h-50">
        <div className="flex justify-center items-center">
          <IoIosTime className="text-3xl  text-violet-800 cursor-pointer group-hover:text-white" />
        </div>
       <h3 class="text-violet-800 font-extrabold text-lg group-hover:text-white">Work Hours</h3>
        <p class="text-gray-700 text-center group-hover:text-white">
          Monday to Sunday: 12pm–11pm
        </p>
      </div>
     <div class="flex flex-col items-center gap-4 p-6 group bg-white shadow-md rounded-md w-[230px] h-50 border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer">
  <MdEmail class="text-3xl text-violet-800 group-hover:text-white" />
  <h3 class="text-violet-800 font-extrabold text-lg group-hover:text-white">Email Address</h3>
  <p class="text-gray-700 text-center group-hover:text-white">info@vhl.co.rw</p>
</div>
 <div class="flex flex-col items-center gap-4 p-6 group bg-white shadow-md rounded-md w-[230px] h-50 border border-gray-200 hover:border-blue-500 hover:bg-violet-600 hover:scale-105 transition duration-300 cursor-pointer">
        <div className="flex justify-center items-center ">
          <MdOutlinePhoneIphone className='text-3xl  text-violet-800 cursor-pointer group-hover:text-white ' />
        </div>
        <h3 class="text-violet-800 font-extrabold text-lg group-hover:text-white
          ">Phone Numbers</h3>
        <p class="text-gray-700 group-hover:text-white">+250 785 922 275</p>
      </div>


    </div>
  )
}

export default Contact
