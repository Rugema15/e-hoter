import React from 'react'
import Place from '../../assets/Place.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Fireplace = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">THE FIREPLACE GRILL</h2>
          <p className="section-subtitle fade-in">
            Quality Served Quickly - Experience exceptional dining at our flagship outlet
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 slide-in-left">
            <h3 className="text-3xl font-bold text-[#102136] mb-6">Our Location</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              The fireplace grill flagship outlet is located in Muhazi Rwamagana near the turning into UMVA Muhazi and Muhazi Beach Resort. We live by the motto "Quality Served Quickly"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Main Dishes</h4>
                <ul className="space-y-3">
                  {['Goat Meat Dishes', 'Beef Dishes', 'Chicken Dishes', 'Fish Dishes'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Beverages</h4>
                <ul className="space-y-3">
                  {['Cold Drinks', 'Hot Drinks', 'Fresh Juices'].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
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
              src={Place} 
              alt="The Fireplace Grill" 
              className="rounded-2xl border-2 border-[#EFEFEF] w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fireplace
