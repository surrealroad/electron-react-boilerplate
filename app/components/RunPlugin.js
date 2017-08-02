// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import type { allPluginsType } from '../reducers/allPlugins';

export default class RunPlugin extends Component {
  props: {
    allPlugins: allPluginsType,
    exec: () => void
  };

  render() {
    const { exec } = this.props;
    return (
      <div>
        <button onClick={exec} className="btn btn-primary" type="submit">
          Run
        </button>
      </div>
    );
  }
}
