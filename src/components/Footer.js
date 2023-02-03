import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">

                <div className="location">
                    <FaHome size='20' style={{color: "white", marginRight: "2rem"}}/>
                    <div>
                        <p>700018 Kolkata</p>
                        <p>India</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                    <FaPhone size='20' style={{color: "white", marginRight: "2rem"}}/>
                    1-222-333-54
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size='20' style={{color: "white", marginRight: "2rem"}}/>
                    sayan@gmail.com
                    </h4>
                </div>

            </div>
            <div className="right">
                <div style={{marginBottom: "0.5rem"}}>
                <h4>About The Company</h4>
                </div>
                <div>
                <p>This is me Sayan Das, an front-end developer and web designer, with a passion for creating beautful and intutive UI/UX.</p>
                </div>
                <div className="social">
                <FaFacebook size='30' style={{color: "white",marginLeft: "2rem", marginRight: "2rem"}}/>
                <FaTwitter size='30' style={{color: "white", marginRight: "2rem"}}/>
                <FaLinkedin size='30' style={{color: "white", marginRight: "2rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer