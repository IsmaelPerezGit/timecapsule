
export default(state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_USERS_PENDING':
    console.log('Loading...');
    return [...state];
    case 'GET_ALL_USERS_FULFILLED':
    console.log('Success!!!', action.payload.data);
    return [...action.payload.data];
    case 'GET_ALL_USERS_REJECTED':
    console.log('Unsuccessful');
    return [...state];
    case 'ADD_NEW_USER_PENDING':
      console.log('Loading...');
      return [...state];
    case 'ADD_NEW_USER_FULFILLED':
      console.log('Success!!!', action.payload.data);
      return [...action.payload.data];
    case 'ADD_NEW_USER_REJECTED':
      console.log('Unsuccessful');
      return [...state];
    default:
      return state;
  }
}
