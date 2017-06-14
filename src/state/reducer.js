import * as actions from './types';

const initialState = {
  shows: [],
  show: {},
  trailerId: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_POPULAR_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.shows
      }
    case actions.FETCH_SHOW_SUCCESS:
      return {
        ...state,
        show: action.show
      }
    case actions.FETCH_TRAILER_SUCCESS:
      return {
        ...state,
        trailerId: action.trailerId
      }
    default:
      return state;
  }
};
