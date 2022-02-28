import React from 'react'
import BottomNav from '../components/BottomNav'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <BottomNav/>
    </div>
  )
}

export default HomePage