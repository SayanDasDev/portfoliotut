import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from "../components/HeroImg2"
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

import backgroundImg from "../assets/projects.jpg"

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2  heading="PROJECTS." text="See Some of My Recent Works" bg={backgroundImg} />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Projects
