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

const initialState = {
  articleIds: {
    ids: [],
    size: 10,
    cursor: 0
  },
  articles: [],
  error: '',
  isFetching: false
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STORY_START:
      return state;
    case FETCH_STORY_SUCCESS:
      return state;
    case FETCH_STORY_FAIL:
      return state;
    case FETCH_ALL_STORIES_START:
      return state;
    case FETCH_ALL_STORIES_SUCCESS:
      return state;
    case FETCH_ALL_STORIES_FAIL:
      return state;
    case GET_NTH_STORIES:
      return state;
    default:
      return state;
  }
};
