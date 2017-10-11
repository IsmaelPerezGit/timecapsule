import React, {Component} from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import StoriesHome from './components/Stories/StoriesHome'
import UserHome from './components/User/UserHome';
import FooterBar from './components/FooterBar'
import CreateUser from './components/User/CreateUser'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAllStories} from './actions/stories'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'

class App extends Component {

  componentDidMount() {
    this.props.getAllStories();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar className="TopNav" right>
              <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="/stories">Stories</Link></NavItem>
              <NavItem><Link to="/users">My Account</Link></NavItem>
            </Navbar>

            <Route exact path="/" component={HomePage}/>
            <Route exact path="/stories" component={StoriesHome}/>
            <Route exact path="/users" component={UserHome}/>
            <Route exact path="/users/new" component={CreateUser}/>
            <FooterBar/>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllStories: bindActionCreators(getAllStories, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(App);
