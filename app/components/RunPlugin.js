// @flow
import React, { Component } from 'react';
import { Button } from 'hig-react';
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
        <Button onClick={exec} size="standard" disabled={this.props.disabled} title="Run" />
      </div>
    );
  }
}
