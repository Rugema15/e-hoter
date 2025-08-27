import React from 'react'
import supermark from '../../assets/supermark.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Supermarket = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">REXCOM SUPERMARKET</h2>
          <p className="section-subtitle fade-in">
            Designed to cater to your evolving lifestyle with convenience and quality
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 slide-in-left">
            <h3 className="text-3xl font-bold text-[#102136] mb-6">Your One-Stop Shop</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              Our retail store offers a wide variety of goods and the convenience of home delivery, making shopping easier than ever.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Fresh & Healthy</h4>
                <ul className="space-y-3">
                  {['Vegetables and Fruits', 'Cosmetics', 'Alcohol and Drinks'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Daily Essentials</h4>
                <ul className="space-y-3">
                  {['Non Alcoholic Drinks', 'Sanitary Materials', 'Toys'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 slide-in-right">
            <img 
              src={supermark} 
              alt="Rexcom Supermarket" 
              className="rounded-2xl border-2 border-[#EFEFEF] w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supermarket

 



