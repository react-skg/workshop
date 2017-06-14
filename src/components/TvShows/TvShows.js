import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TvShow from './TvShow/TvShow';

import './TvShows.css';
const { array } = PropTypes;

class TvShows extends Component {
  render() {
    return (
      <div className="TvShows">
       {
        this.props.shows.map((show, index) => {
          return (
            <TvShow
              key={index}
              id={show.id}
              name={show.name}
              rating={show.vote_average}
              posterPath={show.poster_path}
              backdropPath={show.backdrop_path}
              firstAirDate={show.first_air_date}
            />
          );
        })
       }
      </div>
    );
  }
}

TvShows.propTypes = {
  /**
   * A list with all the tv shows to display
   */
  shows: array
};

export default TvShows;
