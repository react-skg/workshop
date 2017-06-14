import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import TvShows from './components/TvShows/TvShows';
import shows from './tvshows.json';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=ccd7f7c8bc4f625411a4e4925c0c5931')
      .then((response) => {
        return response.text()
      }).then((body) => {
        const data = JSON.parse(body);
        this.setState({ shows: data.results });
      })
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <TvShows shows={this.state.shows} />
      </div>
    );
  }
}

export default App;
