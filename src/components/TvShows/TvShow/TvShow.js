import React, { Component } from 'react';
import PropTypes from 'prop-types';

const { string, number } = PropTypes;

class TvShow extends Component {
  render() {
    return (
      <div className="TvShow">
        <h2>{this.props.name}</h2>
        <p>{this.props.overview}</p>
        <p>Rating: {this.props.rating}</p>
        <p>Releashed On: {this.props.firstAirDate}</p>
      </div>
    );
  }
}

TvShow.propTypes = {
  /**
   * The name of the show
   */
  name: string,
  /**
   * A description about the plot of the show
   */
  overview: string,
  /**
   * The id of the show in themoviedb.org
   */
  id: number,
  /**
   * The rating which could be from 1-10
   */
  rating: number,
  /**
   * The path of the poster image
   */
  posterPath: string,
  /**
   * The path of the backdrop image
   */
  backdropPath: string,
  /**
   * The first air date 
   */
  firstAirDate: string
};

export default TvShow;
