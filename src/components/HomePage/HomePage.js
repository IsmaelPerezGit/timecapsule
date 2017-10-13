import React from 'react'
import {Input, Button} from 'react-materialize'
import {Link} from 'react-router-dom'

class HomePage extends React.Component {

  state = {
    username: '',
    password: ''
  }

    // If the input to the field is not a specific username or password
    // then either display some sort of error message for the username//
    // or just don't go anywhere. If they do successfully log in, then
    // re-route them to the dashboard or whatever

  render() {

    const onSubmit = (e) => {
      if (e.target.value === "Bo") {
        return "Success"
      } else { return "Incorrect!"
      }
    }

    return (
      <div>
        <div className="homePage">
          <h3 className="homeTitle">Time Capsule</h3>
          <p className="homeTitle">A News Scrapbook.</p>
          <form >
            <div className="row signInForm">
              <div className="col s6 offset-s4 ">
                <Input name="username" id="username" type="text" label="Username" s={8}/>
              </div>
              <div className="col s6 offset-s4 ">
                <Input name="password" type="password" label="password" s={8}/>
              </div>
              <div>
                <Link to="/stories">
                  <Button className="signInButton">Submit</Button>
                </Link>
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
