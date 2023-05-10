import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Testonomials from './Components/Testonomials'
import CTA from './Components/CTA'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Testonomials/>
    <CTA/>
    <Footer/>
    </div>
  )
}

export default App
