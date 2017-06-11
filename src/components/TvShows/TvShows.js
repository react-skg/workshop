import React, { Component } from 'react';
import TvShow from './TvShow/TvShow';

class TvShows extends Component {
  render() {
    return (
      <div className="TvShows">
       A list of multiple
       <TvShow />
       <TvShow />
       <TvShow />
       <TvShow />
      </div>
    );
  }
}

export default TvShows;
