import React from 'react'
import James from '../../assets/James.jpg'
import avatar from '../../assets/avatar.jpg'
import client from '../../assets/client.png'

const Testimonial = () => {
  return (
    <div className="flex flex-wrap gap-10 px-8 py-6 p-35  mt-30">
      <h2 className="text-3xl font-bold text-center w-full mb-8">Testimonials</h2>
      <div className="group bg-white shadow-md p-15 rounded-md w-[300px] border border-gray-200 h-120 flex flex-col justify-between">
        <p className="text-gray-700 mb-4">
          "I am always impressed with the wide variety of products available at Rexcom. From groceries to household items, they have everything I need at unbeatable prices. Plus, their service is incredibly quick and efficient. I highly recommend Rexcom for all your shopping needs."
        </p>
        <div className="flex justify-center mt-4">
          <img src={James} alt="dbb" className="w-15 h-15 rounded-full object-cover border-1 border-white shadow-md" />
          <div className="text-center mt-2">
            James HABIYAKARE<br />
            Kigali, Rwanda
        </div>
      </div>
      </div>

     
      <div className="group bg-white shadow-md p-10 rounded-md w-[300px] border border-gray-200 h-90 flex flex-col justify-between mt-4">
        <p className="text-gray-700 mb-4">
          “An amazing venue offered a beautiful setting for my wedding and a range of amenities to make our day as stress-free as possible”
        </p>
        <div className="flex flex-col items-center mt-4">
          <img src={avatar} alt="dbb" className="w-15 h-15 rounded-full object-cover " />
          <div className="text-center mt-2">
            Emille NIYONGIRA<br />
            Kicukiro, Rwanda
          </div>
        </div>
      </div>

    
      <div className="group bg-white shadow-md p-15 rounded-md w-[310px] border border-gray-200 flex flex-col justify-between">
        <p className="text-gray-700 mb-4">
          “I absolutely love shopping at Rexcom! They consistently offer fantastic products at unbeatable prices. Plus, their selection of fresh vegetables is top-notch - perfect for anyone who loves their greens. I highly recommend Rexcom for all your shopping need”
        </p>
        <div className="flex flex-col items-center mt-4">
          <img src={client} alt="dbb" className="w-15 h-15 rounded-full object-cover " />
          <div className="text-center mt-2">
            Callixte KAMPIRE<br />
            Kigali, Rwanda
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
