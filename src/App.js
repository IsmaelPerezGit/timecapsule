import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Navbar'
import FooterBar from './components/FooterBar'
import HomePage from './components/HomePage/HomePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <HomePage/>
        <FooterBar/>
      </div>
    );
  }
}

export default App;
