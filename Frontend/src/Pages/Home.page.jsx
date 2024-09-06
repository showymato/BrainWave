import React from 'react'
import HeroSection from "../components/Header/HeroSection"
import Features from "../components/Home/Features"
import HowItWorks from '../components/Home/HowItWorks'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <Features/>
      <HowItWorks/>
    </div>
  )
}

export default HomePage