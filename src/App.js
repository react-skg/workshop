import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './state/store';
import TvShowsScreen from './TvShowsScreen';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TvShowsScreen />
      </Provider>
    );
  }
}

export default App;
