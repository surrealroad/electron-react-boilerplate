// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class CopyToClipboard extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-default" type="submit">
          Copy to Clipboard
        </button>
      </div>
    );
  }
}
