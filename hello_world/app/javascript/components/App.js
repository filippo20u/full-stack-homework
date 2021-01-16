import React from "react"

import {
  BrowserRouter as  Router,
  Route,
  Switch, 
  NavLink
} from 'react-router-dom'

import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import LearnMore from './pages/LearnMore'

import Gallery from './pages/Gallery'

import { Nav, NavItem } from 'reactstrap'


class App extends React.Component {
  render () {
    return (
      <Router>
        <h1>Hello Fuffolo</h1>

        <Nav>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/learn">Learn More</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink to="/gallery">Gallery</NavLink>
          </NavItem>

        </Nav>

      



        <Switch>

        {/* Replace by line below, from components to routes! */}
        {/* <AboutUs/>
        <LearnMore/>
        <Home/> */}

        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ AboutUs } />
        <Route path="/learn" component={ LearnMore } />
        <Route path="/gallery" component={ Gallery } />


        </Switch>
      </Router>
    );
  }
}

export default App
