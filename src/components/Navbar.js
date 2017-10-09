import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NavigationBar extends React.Component {
  render() {
    return (
      
      <Navbar className="TopNav" right>
        <NavItem href='get-started.html'>Home</NavItem>
      	<NavItem href='get-started.html'>Stories</NavItem>
      	<NavItem href='components.html'>My Account</NavItem>
      </Navbar>
    )
  }
}

export default NavigationBar
