import React from 'react'
import { FaUsers, FaBuilding, FaGlobe, FaStar } from 'react-icons/fa'

const Percentage = () => {
  const stats = [
    {
      icon: <FaUsers className="text-4xl text-white" />,
      number: "500+",
      label: "Happy Customers",
      description: "Satisfied clients across Rwanda and Kenya"
    },
    {
      icon: <FaBuilding className="text-4xl text-white" />,
      number: "15+",
      label: "Business Units",
      description: "Diversified portfolio of investments"
    },
    {
      icon: <FaGlobe className="text-4xl text-white" />,
      number: "2",
      label: "Countries",
      description: "Operating in Rwanda and Kenya"
    },
    {
      icon: <FaStar className="text-4xl text-white" />,
      number: "8+",
      label: "Years Experience",
      description: "Building trust and excellence"
    }
  ];

  return (
    <div className="w-full bg-[#102136]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in text-white">Our Impact in Numbers</h2>
          <p className="section-subtitle fade-in text-white">
            Discover the scale and reach of VHL Group's operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="   hover:border-white/40 transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold text-white mb-2">{stat.label}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Percentage