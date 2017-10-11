import React from 'react'
import {Input, Button} from 'react-materialize'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="homePage">
          <h3 className="homeTitle">Time Capsule</h3>
          <div className="row signInForm">
            <div className="col s6 offset-s4 ">
              <Input type="email" label="Email" s={8}/>
            </div>
            <div className="col s6 offset-s4 ">
              <Input type="password" label="password" s={8}/>
            </div>
          </div>
          <p className="notAMember">not a member?</p>
          <Link to="/users/new">
            <Button  className="notAMemberButton">Sign Up</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage
