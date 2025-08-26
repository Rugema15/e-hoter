import React from 'react'
import Banner from '../../assets/Banner.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Investment = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-30 bg-gray-50 border border-gray-200 rounded-md shadow-sm">
      <div className="w-full md:w-1/2">
        <img
          src={Banner}
          alt="Investments"
          className="rounded-md shadow-md w-full h-102 object-cover"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-violet-600 mb-4">OUR CURRENT INVESTMENT</h2>
        <p className="mb-4 text-gray-700">
          VHL Group is a diversified investment company with interests in:
        </p>
        <div className="grid grid-cols-2 gap-x-6 text-gray-800 mb-4">
          <ul className="list-none space-y-2">
            {['Hospitality', 'Tourism', 'Retail', 'Consultancy'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-none space-y-2">
            {['Vilimani Garden Resorts', 'The Fireplace Grill', 'Rexcom Supermarket', 'Muhazi Organic Farm in Rwanda'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-700">
          We are committed to delivering exceptional value to our customers and investors through our diverse portfolio of investments.
        </p>
      </div>
    </div>
  )
}

export default Investment
