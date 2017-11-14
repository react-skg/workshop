import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import createApolloClient from './client';
import TvShowsScreen from './screens/TvShowsScreen';
import TvShowDetailsScreen from './screens/TvShowDetailsScreen';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={createApolloClient()}>
          <Router>
            <div>
              <Route path="/" exact component={TvShowsScreen} />
              <Route path="/show/:id" component={TvShowDetailsScreen} />
            </div>
          </Router>
      </ApolloProvider>
    );
  }
}

export default App;
