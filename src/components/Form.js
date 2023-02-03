import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form-container">

      <form>
      <label>Your Name</label>
      <input type="text" />
      <label>E-mail</label>
      <input type="email" />
      <label>Subject</label>
      <input type="text" />
      <label>Message</label>
      <textarea rows="6" placeholder="Type your message here" />
      <button className="btn">Submit</button>

      </form>
    </div>
  )
}

export default Form