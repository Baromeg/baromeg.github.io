import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <StyledNavbar>
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
  a {
    color: white;
    text-decoration: none;
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
`
export default Navbar
