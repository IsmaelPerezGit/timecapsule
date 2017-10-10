import React, {Component} from 'react';
import './App.css';
import NavigationBar from './components/Navbar'
import FooterBar from './components/FooterBar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllStories } from './actions/stories'

class App extends Component {

  componentDidMount() {
    this.props.getAllStories();
  }

  render() {
    return (
      <div className="App" >
        <NavigationBar />
        <FooterBar />
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
