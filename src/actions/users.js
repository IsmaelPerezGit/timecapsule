import axios from 'axios';

const url = `localhost:9001/users/new`;
const request = axios.get(url);

export const addNewUser = () => {
  return {
    type: 'ADD_NEW_USER',
    payload: request
  }
}
