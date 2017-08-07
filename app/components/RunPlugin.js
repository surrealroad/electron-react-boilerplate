// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class RunPlugin extends Component {
  props: {
    exec: () => void,
    disabled: boolean
  };

  render() {
    const { exec } = this.props;
    return (
      <div>
        <button onClick={exec} className="btn btn-primary" type="submit" disabled={this.props.disabled}>
          Run
        </button>
      </div>
    );
  }
}
