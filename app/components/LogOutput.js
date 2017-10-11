// @flow
import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import { H3, Body } from 'hig-react';

export default class LogOutput extends Component {
  props: {
    logText: ?string
  };

  componentDidUpdate() {
    // scroll to bottom
    this.textarea.scrollTop = this.textarea.scrollHeight;
  }

  render() {
    return (
      <div>
        <H3>Log:</H3>
        <div
          id="log"
          ref={textarea => {
            this.textarea = textarea;
          }}
        >
          <Body>{this.props.logText}</Body>
        </div>
      </div>
    );
  }
}
