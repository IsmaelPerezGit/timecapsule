import React from 'react'

class StoryListItem extends React.Component {
  render() {
    return (
      <li class="collection-item avatar">
        <i class="material-icons circle">folder</i>
        <span class="storyTitle">Title</span>
        <a href="#!" class="secondary-content">
          <i class="material-icons">grade</i>
        </a>
      </li>
    )
  }
}

export default StoryListItem
