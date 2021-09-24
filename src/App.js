// Import Pages
import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import MyProjects from './pages/MyProjects'
import ProjectDetail from './pages/ProjectDetail'
import Footer from './components/Footer'

// Router
import { Switch, Route, useLocation, HashRouter } from 'react-router-dom'

// Animation
import { AnimatePresence } from 'framer-motion'

// Global Style
import { ThemeProvider } from 'styled-components'
import { useDarkMode } from '../src/components/useDarkMode'
import GlobalStyle from '../src/components/GlobalStyle'
import { lightTheme, darkTheme } from '../src/components/Themes'

const App = () => {
  // const location = useLocation()

  // Theme Toggle
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === 'dark' ? darkTheme : lightTheme

  //adjust scroll behaviour
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0)
    }, 1)
  }
  if (!mountedComponent) return <div />
  return (
    <div className='App'>
      <ThemeProvider theme={themeMode}>
        <HashRouter>
          <GlobalStyle />
          <Navbar theme={theme} themeToggler={themeToggler} />
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route path='/' component={AboutMe} exact />

                  <Route path='/myprojects' component={MyProjects} exact />

                  <Route path='/myprojects/:id' component={ProjectDetail} />

                  <Route path='/contact' component={Contact} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </HashRouter>
      </ThemeProvider>
    </div>
  )
}
if (module.hot) {
  module.hot.accept()
}
export default App
