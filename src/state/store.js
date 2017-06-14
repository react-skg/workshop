import { createStore } from 'redux';
import { reducer as tvShows } from './reducer';

export const store = createStore(tvShows);