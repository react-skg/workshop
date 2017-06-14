import * as actions from './types';

export const fetchShowsSuccess = shows => ({
  type: actions.FETCH_POPULAR_SHOWS_SUCCESS,
  shows
});