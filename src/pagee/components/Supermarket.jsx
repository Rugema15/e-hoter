import React, { useRef, useEffect, useState } from 'react'
import supermark from '../../assets/supermark.jpeg'
import { MdCheckCircle } from 'react-icons/md'

const Supermarket = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight - 100) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row items-start gap-12 p-8 bg-gray-50 border border-gray-200 rounded-md shadow-sm h-120"
    >
      <div className={`w-full md:w-1/2 transition-all duration-700 ${visible ? 'animate-slideLeft' : 'opacity-0 translate-x-[-80px]'}`}>
        <h2 className="text-4xl font-bold text-violet-600 mb-4">REXCOM SUPERMARKET</h2>
        <p className="mb-4 text-gray-700">
          Designed to cater to your evolving lifestyle. Our retail store offers a wide variety of goods and the convenience of home delivery.
        </p>
        <div className="grid grid-cols-2 gap-x-8 text-gray-800 mb-4">
          <ul className="list-none space-y-2">
            {['Vegetables and Fruits', 'Cosmetics', 'Alcohol and drinkings'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="list-none space-y-2">
            {['Non Alcoholic Drinks', 'Sanitary Materials', 'Toys'].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <MdCheckCircle className="text-violet-600 text-lg" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`w-full md:w-1/2 transition-all duration-700 ${visible ? 'animate-slideRight' : 'opacity-0 translate-x-[80px]'}`}>
        <img src={supermark} alt="Supermarket" className="rounded-md shadow-md w-full" />
      </div>
    </div>
  )
}

export default Supermarket

 



