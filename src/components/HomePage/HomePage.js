import React from 'react'
import {Input, Button} from 'react-materialize'

class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        <h3 className="homeTitle">Time Capsule</h3>
        <div className="row">
          <div className="col s6 offset-s4 signInForm">
            <Input type="email" label="Email" s={8}/>
          </div>
          <div className="col s6 offset-s4">
            <Input type="password" label="password" s={8}/>
          </div>
        </div>
        <p>not a member?</p>
        <Button >Sign Up</Button>
      </div>
    )
  }
}

export default HomePage
