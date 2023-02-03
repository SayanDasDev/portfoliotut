import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Form from "../components/Form"
import HeroImg2 from '../components/HeroImg2'

import backgroundImg from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Contact" text="Feel free to reach out to us" bg={backgroundImg} />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
