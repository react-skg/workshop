import * as actions from './types';

const initialState = {
  shows: [],
  show: {}
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        shows: action.shows
      }
    case actions.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        show: action.show
      }
    default:
      return state;
  }
};