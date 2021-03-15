import React from 'react'
import Toggle from './Toggle'

// Animation
import { AnimateSharedLayout } from 'framer-motion'
import { UseScroll } from './UseScroll'
import { scrollReveal } from '../Animation'

import styled from 'styled-components'
import { StyledGlobal } from '../styles'

const FAQ = () => {
  const [element, controls] = UseScroll()

  return (
    <StyledLearning
      variants={scrollReveal}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <Hide>
        <h2>What I am currently learning</h2>
      </Hide>
      <AnimateSharedLayout>
        <Hide>
          <Toggle title='First Question'>
            <div className='explanation'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nostrum.
              </p>
            </div>
          </Toggle>
        </Hide>
        <Hide>
          <Toggle title='Second question'>
            <div className='explanation'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nostrum.
              </p>
            </div>
          </Toggle>
        </Hide>

        <Hide>
          <Toggle title='Third question'>
            <div className='explanation'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nostrum.
              </p>
            </div>
          </Toggle>
        </Hide>

        <Hide>
          <Toggle title='Forth question'>
            <div className='explanation'>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nostrum.
              </p>
            </div>
          </Toggle>
        </Hide>
      </AnimateSharedLayout>
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
  /* .explanation:after {
    display: block;
    content: '';
    background: #CCCCCC;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
} */
`
const Hide = styled.div`
  overflow: hidden;
`
export default FAQ
