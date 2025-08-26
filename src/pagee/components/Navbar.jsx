import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import home from '../../assets/home.jpg';

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
        
          <ul className="hidden md:flex gap-8 ml-8">
            <li>Home</li>
            <li>Contact</li>
          </ul>
        </nav>
      
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-white shadow-md p-4 absolute top-full left-0 w-full z-20">
            <li className="py-2 border-b">Home</li>
            <li className="py-2 border-b">Contact</li>
            <li className="py-2">Address: Kigali, Rwanda</li>
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
