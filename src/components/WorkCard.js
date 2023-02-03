import "./WorkCardStyles.css"
import {NavLink} from 'react-router-dom'

import React from 'react'

function WorkCard(props) {
  return (
<div className="work-card">
            <img className="proj-img" src={props.imgsrc} alt="proj-img" />

            <h4 className="proj-title">{props.title}</h4>

            
              <p className="proj-text">
                {props.text}
              </p>
              <div className="proj-btns">
                <NavLink className="btn" to={props.view}>
                  View
                </NavLink>
                <NavLink className="btn" to={props.src}>
                  Source
                </NavLink>
              </div>
            
          </div>
  )
}

export default WorkCard
