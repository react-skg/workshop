import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import TvShows from './components/TvShows/TvShows';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <TvShows />
      </div>
    );
  }
}

export default App;
