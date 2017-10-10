export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_STORIES_FULFILLED':
      console.log('payload', action.payload);
      return [...action.payload.data]
    case 'ADD_A_STORY_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
