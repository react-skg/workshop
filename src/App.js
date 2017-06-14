import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { store } from './state/store';
import TvShowsScreen from './screens/TvShowsScreen';
import TvShowDetailsScreen from './screens/TvShowDetailsScreen';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={TvShowsScreen} />
            <Route path="/show/:id" component={TvShowDetailsScreen} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
