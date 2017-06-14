import React, { Component } from 'react';
import { string, func } from 'prop-types';

import './Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar">
        <input
          className="Toolbar-input"
          type="search"
          placeholder="Search a movie..."
          value={this.props.searchFieldValue}
          onChange={this.props.onSearchFieldChange}
        />
      </div>
    );
  }
}

Toolbar.PropTypes = {
  searchFieldValue: string,
  onSearchFieldChange: func
}

export default Toolbar;
