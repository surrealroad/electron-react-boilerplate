// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class CopyToClipboard extends Component {
  props: {
    copy: () => void
  };

  render() {
    const { copy } = this.props;
    return (
      <div>
        <button onClick={copy} className="btn btn-default" type="submit">
          Copy to Clipboard
        </button>
      </div>
    );
  }
}
