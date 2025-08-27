import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is VHL Group and what do you do?",
      answer: "VHL Group is a diversified investment company headquartered in Rwanda with operations in both Rwanda and Kenya. We have interests in Real Estate, Retail, Consultancy, Tourism, Travel and Hospitality. Our flagship projects include Vilimani Garden Resorts, The Fireplace Grill, Rexcom Supermarket, and Muhazi Organic Farm."
    },
    {
      id: 2,
      question: "Where are VHL Group's main operations located?",
      answer: "VHL Group operates primarily in Rwanda and Kenya. In Rwanda, we have operations in Kigali, Rwamagana, and other key locations. Our Kenyan operations are centered around Vilimani Business Centers which serve as retail stores, restaurants, and special event venues."
    },
    {
      id: 3,
      question: "What services does Vilimani Garden Resorts offer?",
      answer: "Vilimani Garden Resorts specializes in creating exceptional events and unforgettable wedding memories. We offer comprehensive services including meeting spaces, venue booking, wedding reception planning, catering, accommodation, and scenic views of the Akagera Valleys. Our gardens provide the perfect backdrop for both corporate events and personal celebrations."
    },
    {
      id: 4,
      question: "Tell me about The Fireplace Grill restaurant.",
      answer: "The Fireplace Grill is our flagship restaurant located in Muhazi, Rwamagana, near the turning into UMVA Muhazi and Muhazi Beach Resort. We live by the motto 'Quality Served Quickly' and specialize in BBQ and local delicacies including goat meat, beef, chicken, and fish dishes. We also offer a selection of cold drinks, hot drinks, and fresh juices."
    },
    {
      id: 5,
      question: "What makes Rexcom Supermarket special?",
      answer: "Rexcom Supermarket has been created with changing lifestyles in mind. We offer a wide variety of products including fresh vegetables and fruits, cosmetics, alcohol and drinks, non-alcoholic beverages, sanitary materials, and toys. Whether you prefer shopping in-store or home delivery, we provide convenient and efficient service to meet all your daily needs."
    },
    {
      id: 6,
      question: "What is unique about Vilimani Cafe's coffee?",
      answer: "Vilimani Cafe offers premium coffee experience with our selection of locally grown coffee beans. Our coffee beans are rich in Vitamin B and antioxidants, and we roast them in small batches at our cafe. Coffee has numerous health benefits including keeping your mood fresh, protecting against Alzheimer's, and potentially helping ward off heart failure."
    },
    {
      id: 7,
      question: "Tell me about Muhazi Organic Farm.",
      answer: "Muhazi Organic Farm is located in Rwamagana, Eastern Province on the shores of Lake Muhazi. We are engaged in farming, mainly duck-breeding and organic produce. The farm operates with sustainable practices and contributes to our commitment to providing organic, locally-sourced products to our customers."
    },
    {
      id: 8,
      question: "How can I contact VHL Group for business inquiries?",
      answer: "You can reach VHL Group through multiple channels: Email us at info@vhl.co.rw, call us at +250 785 922 275, or visit our physical address at RN3 Muhazi, Muhazi, Rwanda. Our work hours are Monday to Sunday from 12pm to 11pm. We welcome all business inquiries and partnership opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="section-title fade-in">Frequently Asked Questions</h2>
          <p className="section-subtitle fade-in">
            Learn more about VHL Group, our services, and what makes us unique
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="group bg-white rounded-2xl border-2 border-[#EFEFEF] hover:border-[#102136] transition-all duration-300 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f8fafc] transition-colors duration-300"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="text-lg font-semibold text-[#102136] group-hover:text-[#1e3a5f] transition-colors duration-300">
                  {faq.question}
                </h3>
                <IoIosArrowDown 
                  className={`text-2xl text-[#102136] transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${faq.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
