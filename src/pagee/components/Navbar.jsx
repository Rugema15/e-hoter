import React, { useState, useEffect } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import home from '../../assets/home.jpg';
import vhlLogo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('.services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className='relative h-screen bg-cover bg-center bg-fixed'
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#102136]/90 to-[#1e3a5f]/80"></div>
      
      <header className={`scroll-smooth fixed w-full z-10 top-0 left-0 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#EFEFEF]' : 'bg-transparent'
      }`}>
        <nav className='flex justify-between items-center p-6 max-w-7xl mx-auto'>
          <div className="flex items-center">
            <img 
              src={vhlLogo} 
              alt="VHL Group Logo" 
              className={`h-8 w-auto transition-all duration-300 ${
                scrolled ? 'h-6' : 'h-8'
              }`}
            />
          </div>
          
          <button
            className={`md:hidden text-3xl focus:outline-none transition-colors duration-300 ${
              scrolled ? 'text-[#102136]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        
          <ul className="hidden md:flex gap-8 ml-8">
            <li className={`cursor-pointer transition-colors duration-300 hover:text-[#3b5a7a] ${
              scrolled ? 'text-[#102136]' : 'text-white'
            }`}>Home</li>
            <li className={`cursor-pointer transition-colors duration-300 hover:text-[#3b5a7a] ${
              scrolled ? 'text-[#102136]' : 'text-white'
            }`}>Contact</li>
          </ul>
        </nav>
      
        {menuOpen && (
          <ul className="md:hidden flex flex-col bg-white/95 backdrop-blur-md border border-[#EFEFEF] p-6 absolute top-full left-0 w-full z-20">
            <li className="py-3 border-b border-[#e8f0f8] text-[#102136] hover:text-[#3b5a7a] transition-colors cursor-pointer">Home</li>
            <li className="py-3 border-b border-[#e8f0f8] text-[#102136] hover:text-[#3b5a7a] transition-colors cursor-pointer">Contact</li>
            <li className="py-3 text-[#102136]">Address: Kigali, Rwanda</li>
          </ul>
        )}
      </header>
      
      <div className='relative z-10 h-full flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 xl:pl-32 2xl:pl-40 text-left max-w-6xl'>
        <div className="fade-in">
          <h3 className='text-2xl md:text-3xl font-medium mb-4 text-[#e8f0f8]'>Hello,</h3>
          <h2 className='text-3xl md:text-5xl  font-bold mb-8 text-white leading-tight'>
            We're a diversified Investment 
            Company with its head office 
            in Rwanda and operating in 
            Kenya and Rwanda.
          </h2>
          <p className='text-lg md:text-xl  text-[#e8f0f8] leading-relaxed max-w-4xl mb-12'>
            Our flagship project include the Vilimani Garden Resorts, The
            Fireplace Grill, Rexcom Supermarket and Muhazi Organic Farm in 
            Rwanda
          </p>
          
          {/* Call to Action Button */}
          <button
            onClick={scrollToServices}
            className="group bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:bg-white/30 hover:border-white/50 text-white px-4 py-3 rounded-2xl font-semibold  transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            Get to Know Us
            <FaChevronDown className="group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
