import React, { useState, useEffect } from 'react'
import James from '../../assets/James.jpg'
import avatar from '../../assets/avatar.jpg'
import client from '../../assets/client.png'

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I am always impressed with the wide variety of products available at Rexcom. From groceries to household items, they have everything I need at unbeatable prices. Plus, their service is incredibly quick and efficient. I highly recommend Rexcom for all your shopping needs.",
      name: "James HABIYAKARE",
      location: "Kigali, Rwanda",
      image: James
    },
    {
      id: 2,
      text: "An amazing venue offered a beautiful setting for my wedding and a range of amenities to make our day as stress-free as possible",
      name: "Emille NIYONGIRA",
      location: "Kicukiro, Rwanda",
      image: avatar
    },
    {
      id: 3,
      text: "I absolutely love shopping at Rexcom! They consistently offer fantastic products at unbeatable prices. Plus, their selection of fresh vegetables is top-notch - perfect for anyone who loves their greens. I highly recommend Rexcom for all your shopping needs",
      name: "Callixte KAMPIRE",
      location: "Kigali, Rwanda",
      image: client
    },
    {
      id: 4,
      text: "The Fireplace Grill exceeded all my expectations. The food quality is exceptional and the service is outstanding. The atmosphere is perfect for both business meetings and family dinners. Highly recommended!",
      name: "Sarah UWIMANA",
      location: "Rwamagana, Rwanda",
      image: avatar
    },
    {
      id: 5,
      text: "Vilimani Gardens provided the perfect backdrop for our corporate event. The staff was professional, the facilities were excellent, and the catering was delicious. Our clients were thoroughly impressed.",
      name: "David MUGISHA",
      location: "Kigali, Rwanda",
      image: client
    },
    {
      id: 6,
      text: "The coffee at Vilimani Cafe is simply the best I've ever tasted. The organic beans and the roasting process create an amazing flavor. It's become my daily ritual to visit this place.",
      name: "Grace UWERA",
      location: "Kigali, Rwanda",
      image: James
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">What Our Customers Say</h2>
          <p className="section-subtitle fade-in">
            Hear from our valued customers about their experiences with VHL Group services
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getCurrentTestimonials().map((testimonial) => (
                    <div key={testimonial.id} className="group bg-white p-6 rounded-2xl border-2 border-[#EFEFEF] hover:border-[#102136] hover:bg-[#102136] hover:scale-105 transition-all duration-300 cursor-pointer hover-lift scale-in">
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <p className="text-gray-700 mb-4 text-sm leading-relaxed italic group-hover:text-white transition-colors duration-300 line-clamp-4">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#e8f0f8]" />
                          <div>
                            <h4 className="font-semibold text-[#102136] group-hover:text-white transition-colors duration-300 text-sm">{testimonial.name}</h4>
                            <p className="text-[#1e3a5f] group-hover:text-[#e8f0f8] transition-colors duration-300 text-xs">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-[#EFEFEF] hover:border-[#102136] rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-[#102136]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-[#EFEFEF] hover:border-[#102136] rounded-full p-3 transition-all duration-300 z-10"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-[#102136]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#102136] scale-125' 
                    : 'bg-[#EFEFEF] hover:bg-[#1e3a5f]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
