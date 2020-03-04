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
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_STORY_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    case FETCH_STORY_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FETCH_ALL_STORIES_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_ALL_STORIES_SUCCESS:
      return {
        ...state,
        articleIds: {
          ...state.articleIds,
          ids: action.payload
        },
        isFetching: false
      };
    case FETCH_ALL_STORIES_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
