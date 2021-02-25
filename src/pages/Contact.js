import React from "react"
import styled from "styled-components"
// Animations
import { motion } from "framer-motion"
import { pageAnimation, titleAnimation } from "../Animation"
import ScrollTop from "../components/ScrollTop"
import me from '../img/Baltasar.jpeg'

import {
  GiPaperPlane
} from "react-icons/gi"
import {
  SiJsonwebtokens,
  SiFlask,
  SiPostgresql,
  SiHeroku,
  SiSlack,
  SiZoom,
  SiBabel,
  SiBulma,
  SiAuth0,
  SiWebpack,
  SiGithub,
  SiLinkedin,
} from "react-icons/si"
import {
  FaSignature,FaEnvelope
} from "react-icons/fa"
import { GiMarshmallows } from "react-icons/gi"
import { BiDevices } from "react-icons/bi"

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#fff" }}
    >
      <ScrollTop/>
      <StyledTitle>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </StyledTitle>
      <div>

      <Hide>
        <Social variants={titleAnimation}>
          <Circle>
            <h2>Send me a message</h2>
          </Circle>
        </Social>
        </Hide>
        <Hide>
        <Social variants={titleAnimation}>
          <Circle>
            <h2>Send me a message</h2>
          </Circle>
        </Social>
        </Hide>
        </div>
        <section className='hero is-fullheight-with-navbar is-link'>
      <div className='hero-body'>
        <div className='container is-fullhd'>
          <div className='section title has-text-primary is-family-code'>
            Let's work together!
          </div>
          <div className='columns'>
            {/* <div className='column is-5 is-mobile'>
              <figure className='image is-4by4  is-centered'>
                <img src={me} className='is-rounded' />
              </figure>
            </div> */}
            <div className='column'>
              <div className='columns is-mobile '>
                <div className='column has-text-centered '>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='http://www.linkedin.com/in/baltasar-romero'
                  >
                    <SiLinkedin/>
                  </a>
                </div>
                <div className='column has-text-centered'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Baromeg/'
                  >
                    <SiGithub/>
                  </a>
                </div>
              </div>
              <form action='https://formspree.io/f/mvovdgkl' method='POST'>
                <div className='field'>
                  <label className='label has-text-primary	'>Your Name</label>
                  <div className='control has-icons-left'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Your Name'
                      name='name'
                    />
                    <span className='icon is-small is-left'>
                      <FaSignature/>
                    </span>
                  </div>
                </div>

                <div className='field'>
                  <label className='label has-text-primary'>Your Email</label>
                  <div className='control has-icons-left'>
                    <input
                      className='input '
                      type='email'
                      placeholder='Your email'
                      name='_replyto'
                    />
                    <span className='icon is-small is-left'>
                      <FaEnvelope/>
                    </span>
                  </div>
                </div>

                <div className='field'>
                  <label className='label has-text-primary'>Message</label>
                  <div className='control has-icons-left'>
                    <textarea
                      className='textarea'
                      placeholder='Write your message'
                      name='text'
                    ></textarea>
                    {/* <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faComments} color='#f05454' size='1x' />
                    </span> */}
                  </div>
                </div>

                <div className='field is-grouped'>
                  <div className='control'>
                    <button
                      className='button is-large is-info has-text-weight-semibold has-text-link	'
                      value='Send'
                    >
                      <span className='icon'>
                        <GiPaperPlane/>
                      </span>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
  padding: 5 rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

function assertEquals(expected, actual) {
  // Parameters are equal
  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    return "Function does not throw error"
    // 'expected' is an array?
  } else if (Array.isArray(expected)) {
    // 'actual' is not an array
    if (!Array.isArray(actual)) {
      return `Expected type of array but found type ${typeof actual}`
      // Arrays of different length
    } else {
      return `Expected array length ${expected.length} but found ${actual.length}`
    }
    // 'expected' is a string
  } else {
    return `Expected "${expected}" but found "${actual}"`
  }
}
console.log(assertEquals("abc", "abc"))
console.log(assertEquals("abcef", "abc"))
console.log(assertEquals(["a"], { 0: "a" }))
console.log(assertEquals(["a", "b", "c"], ["a", "b", "c"]))
console.log(assertEquals(["a", "b"], ["a", "b", "c"]))

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`

export default Contact
