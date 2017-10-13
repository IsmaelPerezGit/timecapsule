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
              <a href={story.url}>
                <div className="card small">
                  <div className="card-image">
                    <img src={story.urlToImage} alt="new article"/>
                  </div>
                  <div className="card-action">
                    <p className="cardTitleText">{story.title}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )
    });

    return (

      <div className="userHome">
        <h3 className="usersTitle">My Album</h3>
        <p className="scrollToViewStories">Scroll to view your stories</p>
        <div className="cardListOuterContainer">
          {cards}
        </div>
        <div>
          <Button className="userHomeButtons">
            Edit Account
          </Button>
          <Button className="userHomeButtons">
            Edit Album
          </Button>
          <Button className="userHomeButtons">
            Delete Account
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
