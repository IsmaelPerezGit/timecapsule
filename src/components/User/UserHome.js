import React from 'react'
import { Button } from 'react-materialize'

class UserHome extends React.Component {
  render() {
    return (
      <div>
        <div className="userHome">
          <h3 className="usersTitle">User Home</h3>
          <div>
            <Button className="notAMemberButton">
              Edit Account
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserHome
