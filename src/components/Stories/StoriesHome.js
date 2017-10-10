import React from 'react'
import { connect } from 'react-redux';

class StoriesHome extends React.Component {
  render() {
    let theStories = this.props.stories.map(story => {
      return (
        <li key={1}>{story.title}></li>
      )
    })

    

    return (
      <div className="storiesHome">
        <ul>
          {theStories}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps, null)(StoriesHome);
