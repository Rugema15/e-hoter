import React from 'react'
import Banner from '../../assets/Banner.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Investment = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">OUR CURRENT INVESTMENT</h2>
          <p className="section-subtitle fade-in">
            VHL Group is a diversified investment company with interests in multiple sectors
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 slide-in-left">
            <img
              src={Banner}
              alt="Investments"
              className="rounded-2xl border-2 border-[#EFEFEF] w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="w-full lg:w-1/2 slide-in-right">
            <h3 className="text-3xl font-bold text-[#102136] mb-6">Investment Portfolio</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              VHL Group is a diversified investment company with interests in:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Core Sectors</h4>
                <ul className="space-y-3">
                  {['Hospitality', 'Tourism', 'Retail', 'Consultancy'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-[#1e3a5f] mb-3">Key Projects</h4>
                <ul className="space-y-3">
                  {['Vilimani Garden Resorts', 'The Fireplace Grill', 'Rexcom Supermarket', 'Muhazi Organic Farm'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <MdCheckCircle className="text-[#102136] text-xl flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              We are committed to delivering exceptional value to our customers and investors through our diverse portfolio of investments.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment
