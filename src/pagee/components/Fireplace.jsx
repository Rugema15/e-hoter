import React from 'react'
import Place from '../../assets/Place.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Fireplace = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12 p-8 bg-gray-50 border border-gray-200 rounded-md shadow-sm m-2">
 
      <div className="w-full md:w-1/3 order-1 m-8">
        <h2 className="text-4xl font-bold text-violet-600 mb-4">THE FIREPLACE GRILL</h2>
        <p className="mb-4 text-gray-700">
          The fireplace grill flagship outlet is located in Muhazi Rwamagana near the turning into UMVA Muhazi and Muhazi Beach Resort lives by the motto “Quality Served Quickly”
        </p>
        <div className="grid grid-cols-2 gap-x-8 text-gray-800 mb-4">
          <ul className="space-y-2">
            {['Goat Meat Dishes', 'Beef Dishes', 'Chicken Dishes', 'Fish Dishes'].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {['Fish Dishes', 'Cold Drinks', 'Hot Drinks'].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div> 
      <div className="w-full md:w-2/3 order-2">
        <img src={Place} alt="Investments" className="rounded-md shadow-md w-100 h-60 m-30" />
      </div>
    </div>
  )
}

export default Fireplace
