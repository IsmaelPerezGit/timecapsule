import axios from 'axios';

export const getAllStories = () => {
  return {
    type: 'GET_ALL_Stories',
    payload: axios.get(`"https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=404889df5a3445b1b4b458767f966e23"`)
  }
}

export const addAStory = (story) => {
  return {
    type: 'ADD_A_SHOP',
    payload: axios.post(``, story)
  }
}
