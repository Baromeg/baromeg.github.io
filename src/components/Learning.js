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

const Learning = () => {
  return (
    <StyledLearning>
      <h2>What I am currently learning</h2>
      <div className='Subject'>
        <h4>First question</h4>
        <div className='explanation'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nostrum.
          </p>
        </div>
      </div>
      <div className="learning-line"></div>
      <div className='Subject'>
        <h4>Second question</h4>

        <div className='explanation'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nostrum.
          </p>
        </div>
      </div>
      <div className="learning-line"></div>

      <div className='Subject'>
        <h4>Third question</h4>

        <div className='explanation'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nostrum.
          </p>
        </div>
      </div>
      <div className="learning-line"></div>

      <div className='Subject'>
        <h4>Forth question</h4>

        <div className='explanation'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, nostrum.
          </p>
        </div>
      </div>
      <div className="learning-line"></div>

    </StyledLearning>
  )
}

const StyledLearning = styled(StyledGlobal)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .learning-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .subject {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .explanation {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`
export default Learning
