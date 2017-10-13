import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {toggleStarred} from '../../actions/stories'

class StoryList extends React.Component {

  state = {
    star: "starNotSelected"
  }

  render() {
    const theStories = this.props.stories.map((story,i) => {
      console.log('isstarred', story.isStarred);
      return (
        <li key={story.url} className="collection-item avatar listItemContainer">
          <a className="storyLink" href={story.url}>
            <img src={story.urlToImage} alt="" className="circle storyImgCircle"/>
          </a>
          <a className="storyLink" href={story.url}>
            <span className="storyTitle">{story.title}</span>
          </a>
          <a href="#!" className="secondary-content">
            <i
              name="star" onClick={() => this.props.toggleStarred(i)}
              className={story.isStarred ? "material-icons starSelected": "material-icons starNotSelected"}>grade</i>
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

function mapDispatchToProps(dispatch) {
  return {toggleStarred: bindActionCreators(toggleStarred, dispatch)}
}

function mapStateToProps(state, props) {
  return {stories: state.stories}
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryList);
