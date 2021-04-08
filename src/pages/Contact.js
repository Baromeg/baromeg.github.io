import React from 'react'
import styled from 'styled-components'

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
    >
      <ScrollTop />
      <StyledTitle>
        <motion.h2 variants={fade}>
          Fancy an <span>e-coffee?</span>
        </motion.h2>
      </StyledTitle>
      <form action='https://formspree.io/f/mvovdgkl' method='POST'>
        <StyledHide>
          <motion.div variants={titleAnimation}>
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
          </motion.div>
        </StyledHide>

        <StyledHide>
          <motion.div variants={titleAnimation}>
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
          </motion.div>
        </StyledHide>

        <StyledHide>
          <motion.div variants={titleAnimation}>
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
          </motion.div>
        </StyledHide>

        <StyledButton
          variants={fade}
          type='submit'
          value='Send'
          whileHover={{
            scale: 1.1
          }}
        >
          <i className='icon'>
            <GiPaperPlane />
          </i>
          Send
        </StyledButton>
      </form>

      <Cards>
        <Card
          whileHover={{
            scale: 1.2
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
          </motion.div>
        </Card>
        <Card
          whileHover={{
            scale: 1.2
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
          </motion.div>
        </Card>
      </Cards>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
  background-size: contain, cover;
  background-position: right, center;
  background-repeat: no-repeat;
  background-image: ${({ theme }) => theme.contactBackground};

  padding: 10rem 10rem;
  color: ${({ theme }) => theme.text};
  min-height: 100vh;
  @media (max-width: 800px) {
    background-size: 50%, cover;
    background-position: bottom 30% right, center;
  }
  h2 {
    font-weight: lighter;
    color: ${({ theme }) => theme.text};
    @media (max-width: 1024px) {
      padding-top: 2rem;
    }
    @media (max-width: 768px) {
      padding-top: 8rem;
    }
    @media (max-width: 414px) {
      padding-top: 6rem;
    }
  }
  i {
    span {
      color: ${({ theme }) => theme.text};
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
      color: ${({ theme }) => theme.text};
    }

    @media (max-width: 1024px) {
      padding-top: 1rem;
      width: 40rem;
      font-size: 1.5rem;
    }
    @media (max-width: 768px) {
      padding-top: 8rem;
    }
    @media (max-width: 414px) {
      padding-top: 3rem;
      width: 32rem;
      font-size: 1.2rem;
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
  }
  textarea {
    @media (max-width: 1450px) {
      height: 10rem;
    }

    @media (max-width: 1024px) {
      height: 10rem;
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
    width: 100%;
  }
  input,
  textarea {
    margin-right: 16px/2;
    box-shadow: ${({ theme }) => theme.shadowInput};
    width: 100%;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    appearance: none;
    -webkit-appearance: none;

    &:focus {
      box-shadow: ${({ theme }) => theme.shadowFocus};
    }
  }
  button {
    font-size: 1.5rem;
    @media (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: 375px) {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1450px) {
    padding-top: 6rem;
  }
  @media (max-width: 1300px) {
    padding-top: 10rem;
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
  color: ${({ theme }) => theme.text};
  @media (max-width: 1366px) {
    h2 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1024px) {
    h2 {
      font-size: 4rem;
    }
    margin-top: 0rem;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 4rem;
      width: 40rem;
    }
    margin-top: 0rem;
  }
  @media (max-width: 414px) {
    h2 {
      font-size: 3rem;
    }
    margin-top: 0rem;

    padding-left: 3rem;
    h2 {
      width: 32rem;
    }
  }
  @media (max-width: 375px) {
    h2 {
      font-size: 3rem;
      width: 32rem;
    }
    margin-top: 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 6rem;
  width: 29rem;
  padding-top: 3rem;
  @media (max-width: 1366px) {
    padding-top: 0rem;
    flex-wrap: nowrap;
  }
  @media (max-width: 1024px) {
    padding-top: 0rem;
    width: 40rem;
    justify-content: center;
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
    font-size: 3rem;
    svg {
      color: #fc8621;
    }
  }
  h3 {
    opacity: 0;
    position: absolute;
    background: white;
    color: black;
    font-size: 0.5rem;
    padding: 0.2rem;
    position: absolute;
    max-width: 100%;
    text-align: center;
  }
  #portfoliolink {
    font-size: 40px;
    box-shadow: ${({ theme }) => theme.shadowButton};
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    padding: 0.5rem 0.5rem 0rem 0.5rem;
    &:hover {
      box-shadow: ${({ theme }) => theme.shadowHover};
      background-color: transparent;
      scale: 1;
      svg {
        color: #fc8621;
      }
    }
    &:focus {
      outline: none;
    }
    &:active {
      box-shadow: ${({ theme }) => theme.shadowActive};
      -webkit-tap-highlight-color: transparent;
    }

    svg {
      color: ${({ theme }) => theme.text};
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
      scale: 0.8;
    }
  }
  @media (max-width: 1300px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 15rem;
  }
  @media (max-width: 1024px) {
    .icon {
      padding: 2rem 0rem;
    }
  }
  @media (max-width: 768px) {
    .icon {
      padding: 5rem 0rem;
    }
  }
  @media (max-width: 667px) {
    .icon {
      padding: 1rem 0;
    }
    flex-basis: 5rem;
  }
`
const StyledButton = styled(motion.button)`
  margin-top: 2rem;
  box-shadow: ${({ theme }) => theme.shadowButton};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  border: none;
  width: 100%;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadowHover};
    background-color: transparent;
    color: #fc8621;
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: ${({ theme }) => theme.shadowActive};
    -webkit-tap-highlight-color: transparent;
  }
`

export default Contact
