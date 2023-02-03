import "./WorkCardStyles.css";


import React from "react";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";


function Work() {
  return (
    <div className="work">
      <div className="work-heading">
        <h2>Projects</h2>
        <div className="work-card-container">
          {WorkCardData.map((val, index) =>{
            return(<WorkCard 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                src={val.src}
            />)
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
