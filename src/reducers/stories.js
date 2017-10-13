
export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_STORIES_PENDING':
      console.log('Loading...');
      return [...state];
    case 'GET_ALL_STORIES_FULFILLED':
      console.log('Success!!!', action.payload.data);
      action.payload.data.articles.map(item => {
        item.isStarred = false;
        return item;
      })
      return [...action.payload.data.articles];
    case 'GET_ALL_STORIES_REJECTED':
      console.log('Unsuccessful');
      return [...state];
    case 'TOGGLE_STARRED':
    console.log('this is the state', action);
      let selectedStory = state.filter((article, i) => i == action.payload)[0]
      selectedStory.isStarred = true;
      let otherStories = state.filter((article, i) => i !== action.payload)
      console.log('otherStories', selectedStory);
      return [...otherStories, selectedStory]

    default:
      return state;
  }
}
