import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Navbar'
import FooterBar from './components/FooterBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <FooterBar/>
      </div>
    );
  }
}

export default App;
