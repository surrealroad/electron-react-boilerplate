// @flow
import React, { Component } from 'react';
import { ProgressCircle } from 'react-desktop/macOs';

export default class Progress extends Component {
  props: {
    size: 25,
    hidden: true
  };

  render() {
    return (
      <ProgressCircle size={this.props.size} hidden={this.props.hidden} />
    );
  }
}
