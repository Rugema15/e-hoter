import React from 'react'
import Garden from '../../assets/Garden.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Gardens = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 ">
        <div className="text-center ">
          <h2 className="section-title fade-in">VILIMANI GARDENS</h2>
          <p className="section-subtitle fade-in">
            Creating exceptional events and unforgettable wedding memories in our beautiful gardens
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 slide-in-left">
            <img 
              src={Garden} 
              alt="Vilimani Gardens" 
              className="rounded-2xl border-2 border-[#EFEFEF] w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 slide-in-right">
            <h3 className="text-3xl font-bold text-[#102136] mb-6">Event & Wedding Services</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              We offer comprehensive services including Meetings, Wedding Planning, and Catering. We specialize in creating exceptional events and wedding memories in our beautiful gardens.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Event Services</h4>
                <ul className="space-y-3">
                  {['Meeting Space', 'Book The Venue', 'Wedding Reception'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] ">Additional Services</h4>
                <ul className="space-y-3">
                  {['Catering', 'Accommodation', 'Scenic View of Akagera Valleys'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gardens
