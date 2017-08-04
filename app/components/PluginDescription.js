// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class PluginDescription extends Component {
  props: {
    pluginDescription: ?string
  };

  render() {
    return (
      <div>
        <p>
          <em>{this.props.pluginDescription}</em>
        </p>
      </div>
    );
  }
}
