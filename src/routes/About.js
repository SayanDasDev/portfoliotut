import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutCard from '../components/AboutCard'

import backgroundImg from '../assets/about.jpg';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About" text="Know more about us" bg={backgroundImg}/>
      <AboutCard />
      <Footer />
    </div>
  )
}

export default About
