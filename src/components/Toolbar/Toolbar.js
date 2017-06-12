import React, { Component } from 'react';

import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <input
          className="Toolbar-input"
          type="search"
          placeholder="Search a movie..."
        />
      </div>
    );
  }
}

export default Toolbar;
