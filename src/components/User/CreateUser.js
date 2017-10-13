import React from 'react'
import {Input, Button} from 'react-materialize'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewUser} from '../../actions/users'

class CreateUser extends React.Component {

  state = {
    username: '',
    email: '',
    password: '',
    confirm: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("new User Added!!");
    console.log(this.state);
    this.props.addNewUser(this.state);
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <div className="createAccountPage">
          <h3 className="newUsersTitle">Create an account!</h3>
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
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewUser: bindActionCreators(addNewUser, dispatch)
  }
}

export default connect(null, mapDispatchToProps) (CreateUser);
