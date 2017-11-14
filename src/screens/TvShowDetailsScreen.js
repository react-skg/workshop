import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { fetchShowSuccess, fetchTrailerSuccess } from '../state/actions';
import TvShowDetails from '../components/TvShows/TvShowDetails/TvShowDetails';

const { string } = PropTypes;

// Component

class TvShowDetailsScreen extends Component {
  componentDidMount() {
    // fetch(
    //   `https://api.themoviedb.org/3/tv/${this.props.match.params
    //     .id}?api_key=ccd7f7c8bc4f625411a4e4925c0c5931`
    // )
    //   .then(response => {
    //     return response.text();
    //   })
    //   .then(body => {
    //     const data = JSON.parse(body);
    //     this.props.onFetchSuccess(data);
    //   });

    fetch(
      `https://api.themoviedb.org/3/tv/${this.props.match.params
        .id}/videos?api_key=ccd7f7c8bc4f625411a4e4925c0c5931`
    )
      .then(response => {
        return response.text();
      })
      .then(body => {
        const data = JSON.parse(body);
        if (data.results && data.results.length > 0) {
          this.props.onFetchTrailerSuccess(data.results[0].key);
        } else {
          this.props.onFetchTrailerSuccess('');
        }
      });
  }

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value });
  }

  render() {
    const { show } = this.props;

    return (
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
// Container

const mapStateToProps = state => ({
  // show: state.show,
  trailerId: state.trailerId
});

const mapDispatchToProps = dispatch => ({
  onFetchSuccess: data => dispatch(fetchShowSuccess(data)),
  onFetchTrailerSuccess: data => dispatch(fetchTrailerSuccess(data))
});

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
  }
`;

// React-Apollo Container.
// Responsible for passing down the data from apollo
const TvShowDataContainer = graphql(tvShowQuery, {
  props: ({ data }) => ({
    show: data.tvShow || {}
  }),
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  TvShowDataContainer
)(TvShowDetailsScreen);
