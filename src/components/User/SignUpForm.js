import React from 'react'
import {Input, Button} from 'react-materialize'
// import axios from 'axios'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewUser} from '../../actions/users'

class SignUpForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirm: ''
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
    console.log("new User Added!!");
    console.log(this.state);
    addNewUser(this.state);
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
              value={this.state.confirm}
              onChange={this.onChange}
              name="confirm"
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

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm);
