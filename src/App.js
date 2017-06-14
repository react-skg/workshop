import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import TvShows from './components/TvShows/TvShows';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shows: [],
      searchFieldValue: ''
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

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Toolbar 
          searchFieldValue={this.state.searchFieldValue} 
          onSearchFieldChange={this.handleChange.bind(this)} 
        />
        <TvShows 
          shows={this.state.shows.filter(
            show => show.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase())
          )} 
        />
      </div>
    );
  }
}

export default App;
