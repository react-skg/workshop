import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TvShowStars from '../TvShowStars/TvShowStars';
import Trailer from './Trailer';

import './TvShowDetails.css';

const { string, array } = PropTypes;

class TvShowDetails extends Component {
  constructor(props){
  	super(props);
  	this.state = { show: false };
  }

  handleHide = () => {
    this.setState({ show: false });
  }

  handleOpenTrailer = () => {
    this.setState({ show: true });
  }

  renderGenres = () => {
    let genresString = '';
    this.props.genres.forEach((genre, index) => {
      if (index === this.props.genres.length - 1) {
        genresString += `${genre.name} | `
      } else {
        genresString += `${genre.name}, `
      }
    })
    return genresString;
  }

  renderPlayImage = () => {
    let playImage = null;

    if (this.props.trailerId) {
      playImage = (
        <img
          src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png"
          alt="Play Trailer"
          className="play_button"
          onClick={() => { this.handleOpenTrailer()}}
        />
      );
    }

    return playImage;
  }

  render() {
    return (
      <div className="TvShowDetails_wrapper">
        <section className="TvShowDetails clearfix">
          <div
            className="TvShowDetails-filter"
            style={{ background: `url('https://image.tmdb.org/t/p/w500/${this.props.posterPath}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
          />
          <div className="TvShowDetails_content_wrapper">
        			<div className="TvShowDetails_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${this.props.backdropPath}`}
                  alt={this.props.name}
                  className="featured_image"
                />
                {this.renderPlayImage()}
        			</div>
        			<div className="TvShowDetails_content">
                <div className="TvShowDetails_content-title-wrapper">
                  <h2 className="title">{this.props.name}</h2>
                  <TvShowStars
                    count={5}
                    size={30}
                    edit={false}
                    value={this.props.rating / 2}
                    onChange={() => {}}
                    color2={'#ffd700'}
                  />
                </div>

        				<p className="description">{this.props.overview}</p>

              <p className="info">{this.renderGenres()} {this.props.firstAirDate}</p>
        			</div>
        		</div>
          <Trailer show={this.state.show} name={`${this.props.name} Trailer`} onHide={() => { this.handleHide(); }} youtubeId={this.props.trailerId}/>
      	</section>
        <button className="TvShowDetails_content_wrapper_button">
          <Link
            to={`/`}
            className="TvShowDetails_content_wrapper_button_link"
          >
            Show All
          </Link>
        </button>
      </div>
    );
  }
}

TvShowDetails.propTypes = {
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
  id: string,
  /**
   * The rating which could be from 1-10
   */
  rating: string,
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
  firstAirDate: string,
  /**
   * The genres
   */
  genres: array,
  /**
   * The youtuber id for trailer
   */
  trailerId: string
};

TvShowDetails.defaultProps = {
  genres: []
};

export default TvShowDetails;
