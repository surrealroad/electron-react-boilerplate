// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Spacer } from 'hig-react';
import PluginSelector from '../containers/PluginSelector';
import RunPlugin from '../containers/RunPlugin';
import LogOutput from '../containers/LogOutput';
import Progress from '../containers/Progress';
import CopyToClipboard from '../containers/CopyToClipboard';
import PluginDescription from '../containers/PluginDescription';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Spacer inset="m">
          <PluginSelector />
          <PluginDescription />
        </Spacer>
        <Spacer inset="m">
          <RunPlugin />
          <Progress />
        </Spacer>
        <Spacer inset="m">
          <LogOutput />
        </Spacer>
        <Spacer inset="m">
          <CopyToClipboard />
        </Spacer>
      </div>
    );
  }
}
