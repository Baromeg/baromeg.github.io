import React from "react"
import baltasar from "../img/Baltasar.jpeg"

const About = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>Baltasar</h2>
          </div>
          <div className='hide'>
            <h2>Romero</h2>
          </div>
          <div className='hide'>
            <h2>Web Developer</h2>
          </div>
        </div>
        <p>Get in touch to know more</p>
        <button>Contact us</button>
        <div className='image'>
          <img src={baltasar} alt='' />
        </div>
      </div>
    </div>
  )
}

export default About
