import React from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './pagee/components/Navbar'
import Services from './pagee/components/Services'
import Investment from './pagee/components/Investment'
import Fireplace from './pagee/components/Fireplace'
import Coffe from './pagee/components/Coffe'
import Supermarket from'./pagee/components/Supermarket'
import Percentage from './pagee/components/Percentage'
import FAQ from './pagee/components/FAQ'
import Testimonial from './pagee/components/Testimonial'
import Contact from './pagee/components/Contact'
import Footer from './pagee/components/Footer'
import Gardens from './pagee/components/Gardens'

const App = () => {
  const { isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Navbar/>
      
      <div className="section-container services-section">
        <Services/>
      </div>
      
      {/* Full width sections */}
      <div className="full-width-section bg-light">
        <Investment/>
      </div>
      
      <div className="full-width-section bg-pattern">
        <Fireplace/>
      </div>
      
      <div className="full-width-section bg-light">
        <Coffe/>
      </div>
      
      <div className="full-width-section bg-pattern">
        <Supermarket/>
      </div>
      
      <div className="full-width-section bg-light no-padding-bottom">
        <Gardens/>
      </div>
      
      <div className="full-width-section bg-pattern no-padding-top no-padding-bottom">
        <Percentage/>
      </div>
      
      <div className="full-width-section bg-light no-padding-top">
        <FAQ/>
      </div>
      
      <div className="full-width-section bg-pattern no-padding-top">
        <Testimonial/>
      </div>
      
      <div className="section-container bg-pattern">
        <Contact/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App
