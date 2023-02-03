import "./HeroImgStyles.css";
import heroImg from "../assets/hero_img.jpg";

import React from 'react'
import { Link } from 'react-router-dom';
 
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="heroImg"src={heroImg} alt="hero_Img" />
      </div>
      <div className="content">
        <p>HI I'M A Freelancer</p>
        <h1>React Developer</h1>
        <div className="hero-buttons">
            <Link to="/projects" className="btn">
                Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
                Contact
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
