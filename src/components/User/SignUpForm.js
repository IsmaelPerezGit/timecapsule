import React from 'react'
import {Input, Button} from 'react-materialize'

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      passwordconfirmation: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("this state object", this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="row creatUserForm">
          <div className="col s6 offset-s4 ">
            <Input
              value={this.state.email}
              onChange={this.onChange}
              name="email"
              type="email"
              label="Email"
              s={8}
            />
          </div>
          <div className="col s6 offset-s4 ">
            <Input
              value={this.state.username}
              onChange={this.onChange}
              name="username"
              type="text"
              label="Username"
              s={8}
            />
          </div>
          <div className="col s6 offset-s4 ">
            <Input
              value={this.state.password}
              onChange={this.onChange}
              name="password"
              type="password"
              label="Password"
              s={8}
            />
          </div>
          <div className="col s6 offset-s4 ">
            <Input
              value={this.state.passwordconfirmation}
              onChange={this.onChange}
              name="passwordconfirmation"
              type="password"
              label="Confirm password"
              s={8}
            />
          </div>
        </div>
        <Button className="createButton">Submit</Button>
      </form>
    )
  }
}

export default SignUpForm
