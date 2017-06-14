import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMoviesSuccess } from '../state/actions';
import Toolbar from '../components/Toolbar/Toolbar';
import TvShows from '../components/TvShows/TvShows';

// Component

class TvShowsScreen extends Component {
  constructor() {
    super();

    this.state = {
      searchFieldValue: ''
    }
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=ccd7f7c8bc4f625411a4e4925c0c5931')
      .then((response) => {
        return response.text()
      }).then((body) => {
        const data = JSON.parse(body);
        this.props.onFetchSuccess(data.results);
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
          shows={this.props.shows.filter(
            show => show.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase())
          )} 
        />
      </div>
    );
  }
}

// Container

const mapStateToProps = state => ({
  shows: state.shows
});

const mapDispatchToProps = dispatch => ({
  onFetchSuccess: data => dispatch(fetchMoviesSuccess(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowsScreen);
