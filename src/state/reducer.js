import * as actions from './types';

const initialState = {
  shows: []
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        shows: action.shows
      }
    default:
      return state;
  }
};