import React from "react";
import Nav from './components/layout/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import './App.css';
import { Route } from 'react-router-dom'


function App() {
  // const [number, setnumber] = useState(0)

  return(
    <div>
      <Nav />
      <br />
      <Route exact path="/home" render={ () => <Home /> } />
      <Route exact path="/about" render={ () => <About /> } />
      <Route exact path="/projects" render={ () => <Projects /> } />
    </div>
  )
}

export default App