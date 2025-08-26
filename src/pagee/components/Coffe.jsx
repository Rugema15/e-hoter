import React from 'react'
import Cafee from '../../assets/Cafee.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Coffe = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-12 p-8 bg-gray-50 border border-gray-200 rounded-md shadow-sm h-120">
      <div className="w-full md:w-1/2">
        <img src={Cafee} alt="Investments" className="rounded-md shadow-md w-100 m-10" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-violet-600 mb-4">VILIMANI CAFE</h2>
        <p className="mb-4 text-gray-700 flex items-center gap-2">
          <MdCheckCircle className="text-violet-600 text-lg" />
          Our selection of coffees are roasted in small batches at Vilimani Cafe
        </p>
        <div className="grid grid-cols-2 gap-x-8 text-gray-800 mb-4">
          <ul className="list-none space-y-2">
          
            {['Locally Grown Coffee', 'Coffee beans rich in Vitamin B', 'Coffee beans rich in antioxidants'].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <MdCheckCircle className="text-violet-600 text-lg" />
                  {item}
                </li>
              )
            )}
          </ul>
          <ul className="list-none space-y-2">
           
            {['Coffee Keeps your mood fresh', "Coffee protect against Alzheimer's", 'Coffee may help ward off heart failure'].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <MdCheckCircle className="text-violet-600 text-lg" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Coffe
