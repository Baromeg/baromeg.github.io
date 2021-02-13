import React from "react"
import baltasar from "../img/Baltasar.jpeg"

// Style
import styled from 'styled-components'

const About = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <Hide>
            <h2>Baltasar</h2>
          </Hide>
          <Hide>
            <h2>Romero</h2>
          </Hide>
          <Hide>
            <h2>Web Developer</h2>
          </Hide>
        </div>
        <p>Get in touch to know more</p>
        <button>Contact us</button>
        
      </StyledDescription>
      <StyledImg>
          <img src={baltasar} alt='' />
        </StyledImg>
    </StyledAbout>
  )
}

const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`
const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`

const StyledImg = styled.div`
  flex: 1;
  overflow: hidden;
  img{
    width: 100%;
    height:80vh;
    object-fit: cover;
  }
`

const Hide = styled.div`
  overflow:hidden;
`
export default About
