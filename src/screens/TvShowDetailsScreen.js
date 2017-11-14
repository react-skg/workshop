import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { fetchShowSuccess, fetchTrailerSuccess } from '../state/actions';
import TvShowDetails from '../components/TvShows/TvShowDetails/TvShowDetails';
import Loader from '../components/Loader';
const { string } = PropTypes;

// Component
class TvShowDetailsScreen extends Component {

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value });
  }

  render() {
    const { show, loading } = this.props;

    return loading ? (
      <Loader />
    ) : (
      <div className="App">
        <TvShowDetails
          name={show.name}
          overview={show.overview}
          id={show.id}
          rating={show.vote_average}
          posterPath={show.poster_path}
          backdropPath={show.backdrop_path}
          firstAirDate={show.first_air_date}
          genres={show.genres}
          trailerId={this.props.trailerId}
        />
      </div>
    );
  }
}

TvShowDetailsScreen.defaultProps = {
  trailerId: string.isRequired
};

// The graphql Query to get the TvShow
const tvShowQuery = gql`
  query getTvShow($id: ID!) {
    tvShow(id: $id) {
      id
      name
      backdrop_path
      overview
      vote_average
      poster_path
      first_air_date
      genres {
        name
      }
    }
    trailer(id: $id)
  }
`;

// React-Apollo Container.
// Responsible for passing down the data from apollo
const TvShowDataContainer = graphql(tvShowQuery, {
  props: ({ data }) => ({
    show: data.tvShow || {},
    trailerId: data.trailer,
    loading: data.loading
  }),
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
});

export default compose(
  TvShowDataContainer,
)(TvShowDetailsScreen);
