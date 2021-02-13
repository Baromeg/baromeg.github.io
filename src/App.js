// import logo from './logo.svg';
// Import Pages
import Navbar from "./components/Navbar"
import AboutMe from "./pages/AboutMe"
import Contact from "./pages/Contact"
import MyProjects from "./pages/MyProjects"

// Router
import { Switch, Route } from "react-router-dom"

// Global Style
import GlobalStyle from "../src/components/GlobalStyle"

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <AboutMe />
        </Route>
        <Route path='/myprojects'>
          <MyProjects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default App
