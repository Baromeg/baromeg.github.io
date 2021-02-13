import React from "react"
import innovation from "../img/innovation.png"
import baltasar from "../img/Baltasar.jpeg"

const Skills = () => {
  return (
    <div className='skills'>
      <div className='description'>
        <h2>
          Hello <span>Skills</span>
        </h2>
        <div className='cards'>
          <div className='card'>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src={baltasar} alt='baltasar' />
      </div>
    </div>
  )
}

export default Skills
