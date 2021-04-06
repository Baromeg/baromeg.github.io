import React, { useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
// import { AppContext } from './AppProvider'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io'
import Switch from 'react-switch'

import { motion } from 'framer-motion'
const Button = styled(motion.button)`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`
const Toggle = styled(motion.div)`
  @import url('http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    /* background-color: red; */
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
    /* background-color: #4d4d4d; */
  }
  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: 100px;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.toggle1};
    transition: 0.4s;
    opacity: 0.8;
  }

  .slider:before {
    font-family: Ionicons;
    font-size: 25px;
    position: absolute;
    content: '\f3b0';

    display: flex;
    justify-content: center;

    /* padding-left: 5px; */
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.toggle};
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: '#fc8621';
    /* background-color: #fff; */
  }

  input:checked + .slider:before {
    transform: translateX(26px);
    font-family: Ionicons;
    font-size: 24px;
    content: '\f467';
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${({ theme }) => theme.toggle};
  }

  /* display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  } */
`
const ThemeToggle = ({ theme, toggleTheme }) => {
  const handleThemeChange = (e) => {
    console.log(e)
    toggleTheme()
  }
  return (
    <>
      {/* <Button onClick={toggleTheme}>
        <svg width='24px' height='24px' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z'
          />
        </svg>
      </Button> */}
      <Toggle>
        <label className='switch'>
          <input type='checkbox' onClick={toggleTheme} />
          <span className='slider' />
        </label>
      </Toggle>

      {/* <Toggle>
        <Switch
          checked={theme === 'lightTheme' ? true : false}
          height={50}
          width={120}
          checkedIcon={
            <Sun
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 35,
                paddingLeft: 10
              }}
              color={theme === 'lightTheme' ? 'white' : 'grey'}
              className='light'
            />
          }
          uncheckedIcon={
            <Moon
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 35,
                paddingLeft: 24
              }}
              color={theme === 'darkTheme' ? 'blue' : 'blue'}
              className='dark'
            />
          }
          onChange={handleThemeChange}
        />
      </Toggle> */}
    </>
  )
}
ThemeToggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
}

export default ThemeToggle
