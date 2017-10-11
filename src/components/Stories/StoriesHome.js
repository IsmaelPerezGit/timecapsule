import React from 'react'
import {connect} from 'react-redux';
import StoryList from './StoryList'

class StoriesHome extends React.Component {

  render() {
    // let theStories = this.props.stories.map(story => {
    //   return (
    //     <li key={story.id}></li>
    //   )
    // })

    return (
      <div>
        <div className="storiesHome">
          <h3 className="storiesTitle">Stories</h3>
            <StoryList />
        </div>
      </div>
    )
  }
}
function mapStateToProps(state, props) {
  return {stories: state.stories}
}

export default StoriesHome
