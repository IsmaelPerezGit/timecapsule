import React from 'react'
import StoryListItem from './StoryListItem'

class StoryList extends React.Component {
  render() {
    return (
      <div className="storyListContainer">
        <ul className="collection storyList">
          <StoryListItem/>
        </ul>
      </div>
    )
  }
}

export default StoryList