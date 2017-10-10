import React from 'react'
import {connect} from 'react-redux';

class StoriesHome extends React.Component {

  render() {
    // let theStories = this.props.stories.map(story => {
    //   return (
    //     <li key={story.id}></li>
    //   )
    // })

    return (
      <div className="storiesHome">
        <h3 className="storyListItem">Stories</h3>
        <ul className="storyListItem">
          <li >Thing 1</li>
          <li >Thing 2</li>
          <li >Thing 3</li>
          <li >Thing 4</li>
          <li >Thing 5</li>
          <li >Thing 6</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, null)(StoriesHome);
