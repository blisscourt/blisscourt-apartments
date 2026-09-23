import React from 'react'
import Herosection from '../components/Herosection'
import About from '../components/About'
import OurApartment from '../components/OurApartment'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <About />
      <OurApartment />
      {/* <Testimonials /> */}
    </div>
  )
}

export default Homepage
