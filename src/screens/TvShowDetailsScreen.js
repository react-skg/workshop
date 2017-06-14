import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchShowSuccess } from '../state/actions';
import Toolbar from '../components/Toolbar/Toolbar';
import TvShows from '../components/TvShows/TvShows';

// Component

class TvShowDetailsScreen extends Component {
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=ccd7f7c8bc4f625411a4e4925c0c5931`)
      .then((response) => {
        return response.text()
      }).then((body) => {
        const data = JSON.parse(body);
        this.props.onFetchSuccess(data);
      })
  }

  handleChange(e) {
    this.setState({ searchFieldValue: e.target.value })
  }

  render() {
    return (
      <div className="App">
        DETAILS SCREEN!
        {JSON.stringify(this.props.show || {}, null, 2, 2)}
      </div>
    );
  }
}

// Container

const mapStateToProps = state => ({
  show: state.show
});

const mapDispatchToProps = dispatch => ({
  onFetchSuccess: data => dispatch(fetchShowSuccess(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetailsScreen);
