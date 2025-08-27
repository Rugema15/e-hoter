import React from 'react'
import Cafee from '../../assets/Cafee.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Coffe = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">VILIMANI CAFE</h2>
          <p className="section-subtitle fade-in">
            Experience the finest locally grown coffee with exceptional health benefits
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 slide-in-left">
            <img 
              src={Cafee} 
              alt="Vilimani Cafe" 
              className="rounded-2xl border-2 border-[#EFEFEF] w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <div className="w-full lg:w-1/2 slide-in-right">
            <h3 className="text-3xl font-bold text-[#102136] mb-6">Premium Coffee Experience</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed flex items-center gap-3">
              <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
              Our selection of coffees are roasted in small batches at Vilimani Cafe
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Coffee Quality</h4>
                <ul className="space-y-3">
                  {['Locally Grown Coffee', 'Coffee beans rich in Vitamin B', 'Coffee beans rich in antioxidants'].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Health Benefits</h4>
                <ul className="space-y-3">
                  {['Coffee Keeps your mood fresh', "Coffee protect against Alzheimer's", 'Coffee may help ward off heart failure'].map(
                    (item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                        <span className="text-lg">{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coffe
