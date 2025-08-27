import React from 'react'
import { FaMapMarked } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaMapMarked className="text-4xl text-[#102136] group-hover:text-white transition-colors duration-300" />,
      title: "Physical Address",
      content: "RN3 Muhazi, Muhazi, Rwanda",
      delay: "0ms"
    },
    {
      icon: <IoIosTime className="text-4xl text-[#102136] group-hover:text-white transition-colors duration-300" />,
      title: "Work Hours",
      content: "Monday to Sunday: 12pm–11pm",
      delay: "100ms"
    },
    {
      icon: <MdEmail className="text-4xl text-[#102136] group-hover:text-white transition-colors duration-300" />,
      title: "Email Address",
      content: "info@vhl.co.rw",
      delay: "200ms"
    },
    {
      icon: <MdOutlinePhoneIphone className="text-4xl text-[#102136] group-hover:text-white transition-colors duration-300" />,
      title: "Phone Numbers",
      content: "+250 785 922 275",
      delay: "300ms"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="section-title fade-in">Contact Us</h2>
        <p className="section-subtitle fade-in">
          Get in touch with us for any inquiries or to learn more about our services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactInfo.map((info, index) => (
          <div 
            key={index}
            className="group bg-white p-8 rounded-2xl border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-500 cursor-pointer hover-lift scale-in"
            style={{ animationDelay: info.delay }}
          >
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex justify-center items-center">
                {info.icon}
              </div>
              <h3 className="text-[#102136] font-bold text-xl group-hover:text-white transition-colors duration-300">
                {info.title}
              </h3>
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300 text-center leading-relaxed">
                {info.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
