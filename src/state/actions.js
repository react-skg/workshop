import * as actions from './types';

export const fetchShowsSuccess = shows => ({
  type: actions.FETCH_POPULAR_SHOWS_SUCCESS,
  shows
});

export const fetchShowSuccess = show => ({
  type: actions.FETCH_SHOW_SUCCESS,
  show
});

export const fetchTrailerSuccess = trailerId => ({
  type: actions.FETCH_TRAILER_SUCCESS,
  trailerId
});
