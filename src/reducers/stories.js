
export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_STORIES_PENDING':
      console.log('pending');
      return [...state];
    case 'GET_ALL_STORIES_FULFILLED':
      console.log('Success!!!', action.payload.data);
      return [...action.payload.data.articles];
    case 'GET_ALL_STORIES_REJECTED':
      console.log('Unsuccessful');
      return [...state];
    default:
      return state;
  }
}
