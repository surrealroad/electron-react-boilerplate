// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'hig-react';

export default class CopyToClipboard extends Component {
  props: {
    copy: () => void
  };

  render() {
    const { copy } = this.props;
    return (
      <div>
        <Button onClick={copy} title="Copy to Clipboard" type="secondary" />
      </div>
    );
  }
}
