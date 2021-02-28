import React from "react"
import styled from "styled-components"
import macbook from "../img/macbook.jpg"

// Animations
import { motion } from "framer-motion"
import { pageAnimation, titleAnimation, fade } from "../Animation"
import ScrollTop from "../components/ScrollTop"
import me from "../img/Baltasar.jpeg"

import {
  StyledGlobal,
  StyledDescription,
  StyledImg,
  StyledHide,
} from "../styles"
import { GiPaperPlane } from "react-icons/gi"
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
import { FaGithub, FaAt } from "react-icons/fa"
import { RiMessage2Fill } from "react-icons/ri"
import { FaSignature, FaEnvelope } from "react-icons/fa"
import { GiMarshmallows } from "react-icons/gi"
import { BiDevices } from "react-icons/bi"

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      // style={{ background: "#fff" }}
    >
      <ScrollTop />
      
      {/* <div>
        <Social variants={titleAnimation}>
          <Circle> </Circle>

          <h2>Send me a message</h2>
        </Social>

        <Social variants={titleAnimation}>
          <Circle> </Circle>

          <h2>Send me a message</h2>
        </Social>
      </div> */}
      {/* <section className='hero is-fullheight-with-navbar is-link'>
        <div className='hero-body'>
          <div className='container is-fullhd'>
            <div className='section title has-text-primary is-family-code'>
              Let's work together!
            </div>
            <div className='columns'> */}
      {/* <div className='column is-5 is-mobile'>
              <figure className='image is-4by4  is-centered'>
                <img src={me} className='is-rounded' />
              </figure>
            </div> */}
      <Cards>
        <Card
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.div className='icon'>
            <a
              id='portfoliolink'
              target='_blank'
              rel='noreferrer'
              href='http://www.linkedin.com/in/baltasar-romero'
            >
              <SiLinkedin />
            </a>
            {/* <motion.h3>weblink</motion.h3> */}
          </motion.div>
        </Card>
        <Card
          whileHover={{
            scale: 1.2,
          }}
        >
          <motion.div className='icon'>
            <a
              id='portfoliolink'
              target='_blank'
              rel='noreferrer'
              href='https://github.com/Baromeg/'
            >
              <FaGithub />
            </a>
            {/* <motion.h3>githubpage</motion.h3> */}
          </motion.div>
        </Card>
      </Cards>
      {/* </div> */}
      <form action='https://formspree.io/f/mvovdgkl' method='POST'>
        <div className='field'>
          <StyledHide>
            <Social variants={titleAnimation}>
              <label>
                <i className='icon'>
                  <FaSignature /> <span className='placeholder'>Your Name</span>
                </i>{" "}
              </label>

              <input
                className='input-field'
                type='text'
                // placeholder='Your Name'
                name='name'
              />
            </Social>
          </StyledHide>
        </div>

        <div className='field'>
          <StyledHide>
            <Social variants={titleAnimation}>
              <label className='label'>
                <i className='icon'>
                  <FaAt /> <span className='placeholder'>Your email</span>
                </i>{" "}
              </label>

              <input
                className='input-field '
                type='email'
                // placeholder='Your email'
                name='_replyto'
              />
            </Social>
          </StyledHide>
        </div>

        <div className='field'>
          <StyledHide>
            <Social variants={titleAnimation}>
              <label>
                <i className='icon'>
                  <RiMessage2Fill />{" "}
                  <span className='placeholder'>Your message</span>
                </i>{" "}
              </label>

              <textarea
                className='input-field'
                // placeholder='Write your message'
                name='text'
                rows='6'
              ></textarea>
            </Social>
          </StyledHide>
        </div>

        <div className='field is-grouped'>
          <div id='control'>
            <StyledButton
              variants={fade}
              type='button'
              className='button is-large is-info has-text-weight-semibold has-text-link	'
              value='Send'
            >
              {/* <i className='icon'>
                          <GiPaperPlane />
                        </i> */}
              Send
            </StyledButton>
          </div>
        </div>
      </form>
      <StyledTitle>
        <motion.h2 variants={fade}>
          Let's work <span>together!</span>{" "}
        </motion.h2>
      </StyledTitle>
      {/* </div>
        </div>
      </section> */}
    </StyledContact>
  )
}
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 6rem;
  width: 29rem;
  @media (max-width: 667px) {
    /* font-size: 4rem; */

    /* justify-content: center;
    padding: 0; */
    /* button {
      margin: 2rem 0rem 5rem 0rem;
    } */
  }
`

const Card = styled(motion.div)`
  flex-basis: 5rem;

  .icon {
    /* display: flex;
    justify-content: center;
    align-items: center;
    position: relative; */
    padding: 1rem;
    font-size: 3rem;
    svg {
      color: #fc8621;
    }
  }
  h3 {
    opacity: 0;
    position: absolute;
    /* margin-left: 1rem; */
    background: white;
    color: black;
    font-size: 0.5rem;
    padding: 0.2rem;
    position: absolute;
    /* font-weight: 400;
        font-size: 20px;
        opacity: 0; */
    /* margin: 0 5px; */
    max-width: 100%;
    text-align: center;
  }
  #portfoliolink {
    font-size: 40px;
    svg {
      color: white;
    }
  }
  :hover {
    h3 {
      opacity: 0.6;
      scale: 1.2;
    }
    svg {
      opacity: 0.6;
      scale: 0.8;
    }
  }
  @media (max-width: 1300px) {
    .icon {
      padding: 1rem 0;
      /* width: 1rem; */
    }
    flex-basis: 15rem;
  }
  @media (max-width: 667px) {
    .icon {
      padding: 1rem 0;
      /* width: 1rem; */
    }
    flex-basis: 5rem;
  }
`
const StyledButton = styled(motion.button)`
  margin-top: 1rem;
  box-shadow: inset 2px 2px 3px #cc6e1d, inset -3px -3px 5px #cc6e1d;
  border-radius: 20px;
  border: none;
  width: 100%;
`
const StyledContact = styled(motion.div)`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${macbook});

  padding: 10rem 10rem;
  color: white;
  min-height: 100vh;
  h2 {
    font-weight: lighter;
    /* font-size: 6rem; */
  }
  i {
    /* display:flex; */
    span {
      color: white;
      font-size:1rem;
    }
  }

  form {
    padding: 1rem;
    width: 29rem;


    .input-icons {
      width: 100%;
      margin-bottom: 10px;
    }

    .icon {
      padding: 15px;
      min-width: 40px;
    }

    .input-field {
      width: 100%;
      padding: 10px;
      padding-left: 30px;
      text-align: left;
      color: white;
      
      }
    }
    #control {
      /* display: flex; */
      /* justify-content: center; */
    }
  }

  input,
  textarea {
    padding: 1rem 0rem;
    margin: 0.2rem 0rem;
    border: 0;
    outline: 0;
    font-size: 16px;
    border-radius: 16px;
    padding: 16px;
    background-color: transparent;
    /* text-shadow: 1px 1px 0 #fff; */
  }
  label {
    display: block;
    /* margin-bottom: 16px; */
    width: 100%;
  }
  input,
  textarea {
    margin-right: 16px/2;
    box-shadow: inset 3px 3px 5px #babecc, inset -3px -3px 5px #cacbd1;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: inset 1px 1px 2px #cacbd1, inset -1px -1px 2px #fff;
    }
  }
  button {
    font-size: 1.5rem;
  }
  @media(max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const StyledTitle = styled.div`
  margin-top: 3rem;
  color: white;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: white;
`
const Social = styled(motion.div)`
  /* display: flex;
  flex-direction: row;
  h2 {
    display: flex;
  } */
`

export default Contact
