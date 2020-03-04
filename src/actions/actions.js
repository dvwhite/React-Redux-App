import axios from 'axios';

/**
 * @function: Sends a GET request using axios to fetch the top 100 stories from the hacker news API endpoint
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const getTopStories = () => dispatch => {
  const urlAPI = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
  axios.get(urlAPI)
    .then(res => {
      console.log("Top stories", res);
    })
    .catch(err => console.err(err))
};

/**
 * @function: 
 * @param {*} id: The id of the story for use in the hacker news API endpoint
 * @returns: A thunk that takes dispatch as an argument
 */
export const getStory = (id) => dispatch => {
  const urlAPI = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
  axios.get(urlAPI)
    .then(res => {
      console.log("Single story:", res)
    })
    .catch(err => console.error(err))
};