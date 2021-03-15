import React from 'react'
import styled from 'styled-components'
import macbook from '../img/coffee3.jpg'

// Animations
import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation, fade } from '../Animation'
import ScrollTop from '../components/ScrollTop'

import { StyledHide } from '../styles'
import { GiPaperPlane } from 'react-icons/gi'
import { SiLinkedin } from 'react-icons/si'
import { FaGithub, FaAt } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
import { FaSignature } from 'react-icons/fa'

const Contact = (props) => {
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

      {/* </div> */}
      <form action='https://formspree.io/f/mvovdgkl' method='POST'>
        <StyledHide>
          <Social variants={titleAnimation}>
            <label>
              <i className='icon'>
                <FaSignature /> <span className='placeholder'>Your name</span>
              </i>{' '}
            </label>
            <label>
              <input
                className='input-field'
                type='text'
                placeholder=''
                name='name'
              />
            </label>
          </Social>
        </StyledHide>

        <StyledHide>
          <Social variants={titleAnimation}>
            <label className='label'>
              <i className='icon'>
                <FaAt /> <span className='placeholder'>Your email</span>
              </i>{' '}
            </label>
            <label>
              <input
                className='input-field '
                type='email'
                placeholder=''
                name='_replyto'
              />
            </label>
          </Social>
        </StyledHide>

        <StyledHide>
          <Social variants={titleAnimation}>
            <label>
              <i className='icon'>
                <RiMessage2Fill />{' '}
                <span className='placeholder'>Your message</span>
              </i>{' '}
            </label>
            <label>
              <textarea
                className='input-field'
                placeholder=''
                name='message'
                rows='8'
              ></textarea>
            </label>
          </Social>
        </StyledHide>

        <StyledButton
          variants={fade}
          type='submit'
          // className='button is-large is-info has-text-weight-semibold has-text-link	'
          value='Send'
        >
          <i className='icon'>
            <GiPaperPlane />
          </i>
          Send
        </StyledButton>
      </form>
      <StyledTitle>
        <motion.h2 variants={fade}>
          Fancy an <span>e-coffee?</span>
        </motion.h2>
      </StyledTitle>
      <Cards>
        <Card
        // whileHover={{
        //   scale: 1.2,
        // }}
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
        // whileHover={{
        //   scale: 1.2,
        // }}
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
  padding-top: 3rem;
  @media (max-width: 1366px) {
    padding-top: 3rem;
  }
  @media (max-width: 1024px) {
    padding-top: 0rem;
    width: 45rem;
    flex-wrap: nowrap;
  }
  @media (max-width: 414px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 32rem;
  }
`

const Card = styled(motion.div)`
  flex-basis: 5rem;

  .icon {
    display: flex;
    justify-content: center;
    /* padding-top: 1rem; */
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
    box-shadow: -2px -2px 5px #3b3b3b, 2px 2px 5px black;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    &:hover {
      box-shadow: -1px -1px 3px #3b3b3b, 1px 1px 3px black;
      background-color: transparent;
      svg {
        color: #fc8621;
      }
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: inset 1px 1px 2px #3b3b3b, inset -1px -1px 2px black;
      -webkit-tap-highlight-color: transparent;
    }

    svg {
      color: white;
    }
    @media (max-width: 375px) {
      font-size: 30px;
    }
  }
  :hover {
    h3 {
      opacity: 0.6;
      scale: 1.2;
    }
    svg {
      /* opacity: 0.6; */
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
  @media (max-width: 1024px) {
    .icon {
      padding: 2rem 0rem;
      /* width: 1rem; */
    }
    /* flex-basis: 15rem; */
  }
  @media (max-width: 768px) {
    .icon {
      padding: 5rem 0rem;
      /* width: 1rem; */
    }
    /* flex-basis: 5rem; */
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
  margin-top: 2rem;
  box-shadow: -2px -2px 5px #3b3b3b, 2px 2px 5px black;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  width: 100%;
  &:hover {
    box-shadow: -1px -1px 3px #3b3b3b, 1px 1px 3px black;
    background-color: transparent;
    color: #fc8621;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: inset 1px 1px 2px #3b3b3b, inset -1px -1px 2px black;
    -webkit-tap-highlight-color: transparent;
  }
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
      font-weight: normal;
      font-size: 1rem;
      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
      @media (max-width: 414px) {
        font-size: 1.2rem;
      }
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
    @media (max-width: 1024px) {
      padding-top: 1rem;
      /* padding-bottom:        1rem; */
      width: 40rem;
      font-size: 1.5rem;
    }
    @media (max-width: 768px) {
      padding-top: 8rem;
      /* padding-bottom:        1rem; */
      /* width: 40rem;
      font-size: 1.5rem; */
    }
    @media (max-width: 414px) {
      padding-top: 3rem;
      /* padding-bottom:        1rem; */
      width: 32rem;
      font-size: 1.2rem;
    }
    @media (max-width: 414px) {
      padding-left: 3rem;
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
  textarea {
    @media (max-width: 1024px) {
      height: 12rem;
    }
    @media (max-width: 768px) {
      height: 15rem;
    }
    @media (max-width: 375px) {
      height: 8rem;
    }
  }
  label {
    display: block;
    /* margin-bottom: 16px; */
    width: 100%;
  }
  input,
  textarea {
    margin-right: 16px/2;
    box-shadow: inset 5px 5px 5px #312f2f, inset -1px -1px 3px #cacbd1;
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
    @media (max-width: 1024px) {
      /* padding: 2rem; */
      font-size: 2rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1024px) {
    padding-bottom: 2rem;
  }
  @media (max-width: 414px) {
    padding-left: 4rem;
  }
`
const StyledTitle = styled.div`
  margin-top: 3rem;
  color: white;
  @media (max-width: 1366px) {
    h2 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 4rem;
      /* padding-bottom:2rem; */
    }
    margin-top: 0rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 5rem;
      /* padding-bottom:2rem; */
    }
    margin-top: 0rem;
  }
  @media (max-width: 414px) {
    h2 {
      font-size: 3rem;
      /* padding-bottom:2rem; */
    }
    margin-top: 0rem;

    padding-left: 3rem;
    h2 {
      width: 32rem;
      /* padding-bottom:2rem; */
    }
  }
  @media (max-width: 375px) {
    h2 {
      font-size: 3rem;
      width: 32rem;
      /* padding-bottom:2rem; */
    }
    margin-top: 0rem;
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
