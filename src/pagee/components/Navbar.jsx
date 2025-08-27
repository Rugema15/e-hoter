import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import home from '../../assets/home.jpg';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className='p-30 h-screen bg-cover bg-center'
      style={{ backgroundImage: `url(${home})` }}
    >
      <header className="scroll-smooth fixed w-full z-10 top-0 left-0">
        <nav className='flex justify-between items-center p-4 bg-white shadow-md'>
          <div className='text-2xl font-bold text-black-600'>
            VHL <span className="text-gray-500 group-hover:text-white">GROUP</span>
          </div>
          
          <button
            className="md:hidden text-3xl text-violet-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </nav>
      
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-white shadow-md p-4 absolute top-full left-0 w-full z-20">
           <a href="home" className="py-2 border-b font-bold hover:bg-gray-100 cursor-pointer">Home</a>
            <a href=" contact" className="py-2 border-b font-bold hover:bg-gray-100 cursor-pointer">Contact</a>
            <h3 className="text-lg font-semibold mb-1">Address</h3>
     <p className="text-gray-700 mb-4">
  304 Nort Cardinal St. <br />
  Dorchester Center, MA 02124
</p>

<h3 className="text-lg font-semibold mb-1 mt-5">Work Hours mt-25</h3>
<p className="text-gray-700">
  Monday to Friday: 7AM–7PM <br />
  Weekend: 10AM–5PM
</p>
            <div className="flex space-x-4 mt-25">
  <FaFacebook className="text-gray-700 text-2xl hover:text-violet-600 cursor-pointer" />
  <AiFillInstagram className="text-gray-700 text-2xl hover:text-violet-600 cursor-pointer" />
</div>
            
          </ul>
        )}
      </header>
      <div className='h-100 bg-sky blue-600 flex flex-col items-start pl-8 text-left'>
        <h3 className='text-3xl font-semibold mt-6'>Hello,</h3>
        <h2 className='text-5xl font-bold mt-6 text-gray'>
          We're a diversified Investment 
          Company with its head office 
          in Rwanda and operating in 
          Kenya and Rwanda.
        </h2>
        <p className='bg-sky text-1xl blue text-gray-100 mt-10'>
          Our flagship project include the Vilimani Garden Resorts,The
          Fireplace Grill,Rexcom Supermarket and Muhazi Organic Farm in 
          Rwanda
        </p>
      </div>
    </div>
  );
};

export default Navbar;
