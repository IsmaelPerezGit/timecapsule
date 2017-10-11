import React from 'react'
import { connect } from 'react-redux'

class StoryListItem extends React.Component {
  render() {

    return (

      <li className="collection-item avatar listItemContainer">
        <img src="https://static.pexels.com/photos/280392/pexels-photo-280392.jpeg"
          alt=""
          className="circle"/>
        <span className="storyTitle">not working</span>
        <a href="#!" className="secondary-content">
          <i className="material-icons star">grade</i>
        </a>
      </li>
    )
  }
}

export default StoryListItem;
