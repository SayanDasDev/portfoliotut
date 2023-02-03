import "./AboutCardStyles.css"
import {Link} from "react-router-dom"
import aboutImg from "../assets/ffd.jpg"

import React from 'react'

const AboutCard = () => {
  return (
    <div className="about-container">
        <div className="left">
            <h2>Who Am I?</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit itaque, id fugit sunt nulla commodi.</p>
            <Link to="/contact" className="btn">Contact</Link>
        </div>
        <div className="right">
            <img class="about-img"src={aboutImg} alt="aboutImg" />
        </div>
    </div>
  )
}

export default AboutCard
