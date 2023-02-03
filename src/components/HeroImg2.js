import "./HeroImg2Styles.css";

import React from "react";

export default function HeroImg2 (props){
    return(
        <>
            <div className="hero2" style={{backgroundImage: `url(${props.bg})`}}>
                
                <div className="heading">
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
                </div>
                
            </div>
        </>
    );
}
