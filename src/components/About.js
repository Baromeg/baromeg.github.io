import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Style
import styled from 'styled-components'
import {StyledGlobal, StyledDescription, StyledImg,StyledHide} from '../styles'

const About = () => {
  return (
    <StyledGlobal>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>Baltasar</h2>
          </StyledHide>
          <StyledHide>
            <h2>Romero</h2>
          </StyledHide>
          <StyledHide>
            <h2>Web Developer</h2>
          </StyledHide>
        </div>
        <p>Get in touch to know more</p>
        <button>Contact us</button>
        
      </StyledDescription>
      <StyledImg>
          <img src={baltasar} alt='' />
        </StyledImg>
    </StyledGlobal>
  )
}


export default About
