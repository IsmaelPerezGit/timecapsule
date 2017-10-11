import React from 'react'
// import StoryListItem from './StoryListItem'
import {connect} from 'react-redux';

class StoryList extends React.Component {

  render() {

    const theStories = this.props.stories.map(story => {
      return (
        <li key={story.url} className="collection-item avatar listItemContainer">
          <a className="storyLink" href={story.url}>
            <img src={story.urlToImage} alt="" className="circle storyImgCircle"/>
          </a>
          <a className="storyLink" href={story.url}>
            <span className="storyTitle">{story.title}</span>
          </a>
          <a href="#!" className="secondary-content">
            <i className="material-icons star">grade</i>
          </a>
        </li>
      )
    });

    return (
      <div className="storyListContainer">
        <ul className="collection storyList">
          {theStories}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, null)(StoryList);
