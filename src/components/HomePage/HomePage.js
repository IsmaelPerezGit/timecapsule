import React from 'react'
import {Input, Button} from 'react-materialize'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {
  state = {
    username: '',
    password: ''
  }

  checkerFunc = () => {
    // If the input to the field is not a specific username or password
    // then either display some sort of error message for the username//
    // or just don't go anywhere. If they do successfully log in, then
    // re-route them to the dashboard or whatever
  }

  render() {
    return (
      <div>
        <div className="homePage">
          <h3 className="homeTitle">Time Capsule</h3>
          <p className="homeTitle" >A News Scrapbook.</p>
          
          <form>
            <div className="row signInForm">
              <div className="col s6 offset-s4 ">
                <Input type="text" label="Username" s={8}/>
              </div>
              <div className="col s6 offset-s4 ">
                <Input type="password" label="password" s={8}/>
              </div>
              <div>
                <Button className="signInButton">Submit</Button>
              </div>
            </div>
          </form>
          <p className="notAMember">not a member?</p>
          <Link to="/users/new">
            <Button className="notAMemberButton">Sign Up</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default HomePage
