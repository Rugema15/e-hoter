import React from 'react'
import Garden from '../../assets/Garden.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Gardens = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-50 mt-30 bg-gray-100 p-10 border border-gray-200 rounded-md shadow-sm h-120">
      <div className="w-full md:w-1/2">
        <img src={Garden} alt="Investments" className="rounded-md shadow-md w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-violet-600 mb-4">VILIMANI GARDENS</h2>
        <p className="mb-4 text-gray-700">
          We offer services such as Meetings, Wedding Planning, and Catering. we specialize in creating exceptional events and wedding memories in their gardens.
        </p>
        <div className="grid grid-cols-2 gap-x-20 text-gray-800 mb-4">
          <ul className="list-none space-y-2">
            {['Meeting Space', 'Book The Venue', 'Wedding Reception'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-none space-y-2">
            {['Catering', 'Accommodation', 'Scenic View of Akagera Valleys in Rwamagana'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gardens
