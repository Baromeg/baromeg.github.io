import React from "react"
import styled from "styled-components"
import { NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import  Wave2 from "./Wave2";

const Navbar = () => {
  const{pathname}= useLocation()
  return (
    <StyledNavbar>
      <div>
      <Wave2 />
        <h1>
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
      </h1>
      </div>
      
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
            About Me
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "60%" : "0%" }}
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
            animate={{ width: pathname === "/myprojects" ? "60%" : "0%" }}
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
            animate={{ width: pathname === "/contact" ? "60%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    @media (max-width: 667px){
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
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      padding: 5rem;
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
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 50%;
  @media (max-width: 1300px){
    left: 0%;
  }
`
export default Navbar
