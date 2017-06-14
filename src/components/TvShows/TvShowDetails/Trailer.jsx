import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

const { string, bool, func } = PropTypes;

class Trailer extends Component {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title"
      >
      <Modal.Header closeButton>
        <Modal.Title>{this.props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          title={this.props.youtubeId}
          src={`http://www.youtube.com/embed/${this.props.youtubeId}`}
          width={570}
          height={315}
          frameBorder="0"
          allowFullScreen
        />
      </Modal.Body>
      </Modal>
    );
  }
}

Trailer.propTypes = {
  /**
   * Set true to show modal
   */
  show: bool,
  /**
   * The name of the show
   */
  name: string,
  /**
   * The id of the show in themoviedb.org
   */
  youtubeId: string,
  /**
   * Function to hide the modal
   */
  onHide: func
};

Trailer.defaultProps = {
  show: false,
  youtubeId: '6QGbsNIZ-uo'
};

export default Trailer;
