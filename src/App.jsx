import React from 'react'
import Navbar from './pagee/components/Navbar'
import Services from './pagee/components/Services'
import Investment from './pagee/components/Investment'
import Fireplace from './pagee/components/Fireplace'
import Coffe from './pagee/components/Coffe'
import Supermarket from'./pagee/components/Supermarket'
import Percentage from './pagee/components/Percentage'
import Testimonial from './pagee/components/Testimonial'
import Contact from './pagee/components/Contact'
import Footer from './pagee/components/Footer'
import Gardens from './pagee/components/Gardens'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Services/>
    <Investment/>
    <Fireplace/>
    <Coffe/>
    <Supermarket/>
    <Gardens/>
    <Percentage/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
