// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Caption } from 'hig-react';

export default class PluginDescription extends Component {
  props: {
    pluginDescription: ?string
  };

  render() {
    return (
      <div>
        <Caption>{this.props.pluginDescription}</Caption>
      </div>
    );
  }
}
