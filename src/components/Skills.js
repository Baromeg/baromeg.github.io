import React from "react"
import innovation from "../img/innovation.png"
import baltasar from "../img/Baltasar.jpeg"
import styled from "styled-components"
import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide,
} from "../styles"

// Animation
import { scrollReveal } from "../Animation";
import { UseScroll } from "./UseScroll";

const Skills = () => {
  const [element, controls] = UseScroll()
  
  return (
    <StyledSkills variants={scrollReveal} initial="hidden" animate={controls} ref={element}>
      <StyledDescription>
        <h2>
          Hello <span>Skills</span>
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={innovation} alt='innovation' />
              <h3>JavaScript</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <Hide>
      {/* <StyledImg>
        <img src={baltasar} alt='baltasar' />
        </StyledImg> */}
        </Hide>
    </StyledSkills>
  )
}

const StyledSkills = styled(StyledGlobal)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
      margin-left:1rem;
      background: white;
      color: black;
      padding:1rem;
    }
    img {
      height: 50px;
    }
  }
`
const Hide = styled.div`
  overflow: hidden;
`
export default Skills
