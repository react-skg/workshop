import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import TvShows from './components/TvShows/TvShows';
import shows from './tvshows.json';
import './App.css';

class App extends Component {
  getShows() {
    return shows.results;
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <TvShows shows={this.getShows()} />
      </div>
    );
  }
}

export default App;
