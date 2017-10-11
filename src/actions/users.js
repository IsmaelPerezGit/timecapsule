import axios from 'axios';

const url = `localhost:9001/users/new`;

export const addNewUser = (user) => {
  return {
    type: 'ADD_NEW_USER',
    payload: axios.post(url, user)
  }
}
