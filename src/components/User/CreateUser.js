import React from 'react'
import {Input, Button} from 'react-materialize'

class CreateUser extends React.Component {
  render() {
    return (
      <div>
        <div className="createAccountPage">
          <h3 className="newUsersTitle">Creat an account!</h3>
          <div className="row creatUserForm">
            <div className="col s6 offset-s4 ">
              <Input type="email" label="Email" s={8}/>
            </div>
            <div className="col s6 offset-s4 ">
              <Input type="password" label="password" s={8}/>
            </div>
            <div className="col s6 offset-s4 ">
              <Input type="password" label="confirm password" s={8}/>
            </div>
            <div className="col s6 offset-s4 ">
              <Input type="password" label="password" s={8}/>
            </div>
          </div>
          <Button className="createButton">Submit</Button>
        </div>
      </div>
    )
  }
}

export default CreateUser
