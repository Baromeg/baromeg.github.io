// import logo from './logo.svg';
// Import Pages
import Navbar from './components/Navbar'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import MyProjects from './pages/MyProjects'
import ProjectDetail from './pages/ProjectDetail'

// Router
import { Switch, Route, useLocation, HashRouter } from 'react-router-dom'

// Animation
import { AnimatePresence } from 'framer-motion'

// Global Style
import GlobalStyle from '../src/components/GlobalStyle'

const App = () => {
  const location = useLocation()

  //adjust scroll behaviour
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0)
    }, 1)
  }

  return (
    <div className='App'>
      <HashRouter>
        <GlobalStyle />
        <Navbar />
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
    </div>
  )
}
if (module.hot){
  module.hot.accept()
}
export default App
