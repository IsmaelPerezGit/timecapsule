import React from 'react'
// import {connect} from 'react-redux';
import StoryList from './StoryList'

class StoriesHome extends React.Component {

  render() {

    return (
      <div>
        <div className="storiesHome">
          <h3 className="storiesPageTitle">Stories</h3>
          <StoryList/>
        </div>
      </div>
    )
  }
}
// function mapStateToProps(state, props) {
//   return {stories: state.stories}
// }

export default StoriesHome
