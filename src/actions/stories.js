import axios from 'axios';

const url = `https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=404889df5a3445b1b4b458767f966e23`;
const request = axios.get(url);

export const getAllStories = () => {
  return {
    type: 'GET_ALL_STORIES',
    payload: request
  }
}
