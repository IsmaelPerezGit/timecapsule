import axios from 'axios';

export const addNewUser = (user) => {
  return {
    type: 'ADD_NEW_USER',
    payload: axios.post('http://localhost:9001/users/new', user)
  }
}
