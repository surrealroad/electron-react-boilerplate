// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ScriptSelector from './ScriptSelector';
import RunScript from './RunScript';
import LogOutput from './LogOutput';
import CopyToClipboard from './CopyToClipboard';
import ScriptDescription from './ScriptDescription';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid" data-tid="container">
          <ScriptSelector />
          <ScriptDescription />
          <RunScript />
          <LogOutput />
          <CopyToClipboard />
        </div>
      </div>
    );
  }
}
