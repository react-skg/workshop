import * as actions from './types';

export const fetchMoviesSuccess = shows => ({
  type: actions.FETCH_POPULAR_MOVIES_SUCCESS,
  shows
});