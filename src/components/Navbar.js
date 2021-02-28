import React from "react"
import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import {  fade } from "../Animation"
import  Wave2 from "./Wave2";

const Navbar = () => {
  const{pathname}= useLocation()
  return (
    <StyledNavbar>
      <motion.div variants={fade}>
        {/* <Wave2 /> */}
        {/* <h1> */}
        <NavLink
          id='logo'
          to='/'
          // activeClassName="selected"
          // activeStyle={{
          //   fontWeight: "bold",
          //   color: "red"
          // }}
        >
          Baltasar Romero
        </NavLink>
        {/* </h1> */}
      </motion.div>

      <ul>
        <li>
          <NavLink
            to='/'
            // activeClassName="selected"
            // activeStyle={{
            //   fontWeight: "bold",
            //   color: "red"
            // }}
          >
            about me
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "80%" : "0%" }}
          />
        </li>
        <li>
          <NavLink
            to='/myprojects'
            // activeClassName="selected"
            // activeStyle={{
            //   fontWeight: "bold",
            //   color: "red"
            // }}
          >
            my projects
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/myprojects" ? "80%" : "0%" }}
          />
        </li>
        <li>
          <NavLink
            to='/contact'
            // activeClassName="selected"
            // activeStyle={{
            //   fontWeight: "bold",
            //   color: "red"
            // }}
          >
            get in touch
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "80%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  min-height: 7vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  /* background: #282828; */
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width:  100%;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    @media (max-width: 667px) {
      font-size: 120%;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    padding: 1rem 2rem;
    /* border: 3px solid #fc8621; */
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      font-size: 2.5rem;
      padding: 0rem 2rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
  @media (max-width: 667px) {
    padding: 1rem 0 0 0;
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #fc8621;
  width: 0%;
  position: absolute;
  bottom: -30%;
  left: 50%;
  @media (max-width: 1300px) {
    width: 80%;
    left: 0%;
  }
`
export default Navbar
