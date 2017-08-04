// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PluginSelector from '../containers/PluginSelector';
import RunPlugin from '../containers/RunPlugin';
import LogOutput from '../containers/LogOutput';
import Progress from '../containers/Progress';
import CopyToClipboard from '../containers/CopyToClipboard';
import PluginDescription from './PluginDescription';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" data-tid="container">
          <PluginSelector />
          <PluginDescription />
          <RunPlugin />
          <Progress />
          <LogOutput />
          <CopyToClipboard />
        </div>
      </div>
    );
  }
}
