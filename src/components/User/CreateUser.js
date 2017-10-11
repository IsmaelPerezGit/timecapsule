import React from 'react'
import SignUpForm from './SignUpForm'

class CreateUser extends React.Component {
  render() {
    return (
      <div>
        <div className="createAccountPage">
          <h3 className="newUsersTitle">Create an account!</h3>
          <SignUpForm />
        </div>
      </div>
    )
  }
}

export default CreateUser
