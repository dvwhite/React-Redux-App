import axios from "axios";

// Action type imports
import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_FAIL,
  FETCH_ALL_STORIES_START,
  FETCH_ALL_STORIES_SUCCESS,
  FETCH_ALL_STORIES_FAIL,
  GET_NTH_STORIES
} from "./../constants/ActionTypes";

/**
 * @function: Sends a GET request using axios to fetch the top 100 stories from the hacker news API endpoint
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const getTopStories = () => dispatch => {
  const urlAPI = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
  dispatch({ type: FETCH_ALL_STORIES_START });
  axios
    .get(urlAPI)
    .then(res => {
      dispatch({ type: FETCH_ALL_STORIES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_ALL_STORIES_FAIL, payload: err.response });
    });
};

/**
 * @function: Slices the array of all stories from cursor to cursor + size
 * @param: none
 * @returns: A thunk that takes dispatch as an argument
 */
export const getNthStories = () => dispatch => {
  dispatch({ type: GET_NTH_STORIES })
};

/**
 * @function:
 * @param {*} id: The id of the story for use in the hacker news API endpoint
 * @returns: A thunk that takes dispatch as an argument
 */
export const getStory = id => dispatch => {
  const urlAPI = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;
  dispatch({ type: FETCH_STORY_START })
  axios
    .get(urlAPI)
    .then(res => {
      console.log("Single story:", res.data)
      dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.error(err.response)
      dispatch({ type: FETCH_STORY_FAIL, payload: err.response })
    });
};
