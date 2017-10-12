import React from 'react'
import {Button} from 'react-materialize'
import {connect} from 'react-redux';


class UserHome extends React.Component {

  render() {

    const cards = this.props.stories.map(story => {
      return (
        <div className="cardOuterCont">
          <div >
            <div className="col s12 ">
              <div className="card small">
                <div className="card-image">
                  <img src={story.urlToImage}/>
                </div>
                <div className="card-content">
                  <p >"{story.description}"</p>
                </div>
                <div className="card-action">
                  <a href="#">{story.title}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    });

    return (

        <div className="userHome">
          <h3 className="usersTitle">My Album</h3>
          <div>
            {cards}
          </div>
          <div>
            <Button className="notAMemberButton">
              Edit Account
            </Button>
          </div>
        </div>

    )
  }
}

function mapStateToProps(state, props) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, null)(UserHome);
