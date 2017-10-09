import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import HomePage from './HomePage/HomePage'
import StoriesHome from './Stories/StoriesHome'
import UserHome from './User/UserHome'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar className="TopNav" right>
              <NavItem href="/" >Home</NavItem>
              <NavItem href="/stories" >Stories</NavItem>
              <NavItem href="/users" >My Account</NavItem>
            </Navbar>

          <Route exact path="/" component={HomePage}/>
          <Route exact path="/stories" component={StoriesHome}/>
          <Route exact path="/users" component={UserHome}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default NavigationBar
