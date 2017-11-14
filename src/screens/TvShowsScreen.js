import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Toolbar from '../components/Toolbar/Toolbar';
import TvShows from '../components/TvShows/TvShows';
import Loader from '../components/Loader';

// Component

class TvShowsScreen extends Component {
  constructor() {
    super();

    this.state = {
      searchFieldValue: ''
    }
  }

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value })
  }

  render() {
    const { loading, shows } = this.props;

    return loading ? <Loader /> : (
      <div className="App">
        <Toolbar 
          searchFieldValue={this.state.searchFieldValue} 
          onSearchFieldChange={this.handleChange.bind(this)} 
        />
        <TvShows 
          shows={shows.filter(
            show => show.name.toLowerCase().includes(this.state.searchFieldValue.toLowerCase())
          )}
        />
      </div>
    );
  }
}

const tvShowsQuery = gql`
  query tvShows {
    shows: tvShows {
      id
      backdropPath: backdrop_path,
      name,
      rating: vote_average,
      firstAirDate: first_air_date
    }
  }
`;

const TvShowsScreenDataContainer = graphql(tvShowsQuery, {
  props: ({ data }) => ({
    shows: data.shows || [],
    loading: data.loading
  })
});

export default compose(
  TvShowsScreenDataContainer
)(TvShowsScreen);
