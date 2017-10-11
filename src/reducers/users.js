
export default(state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_USER_PENDING':
      console.log('Loading...');
      return [...state];
    case 'ADD_NEW_USER_FULFILLED':
      console.log('Success!!!', action.payload.data);
      return [...action.payload.data.articles];
    case 'ADD_NEW_USER_REJECTED':
      console.log('Unsuccessful');
      return [...state];
    default:
      return state;
  }
}
