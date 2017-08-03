// @flow
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

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
        <form>
          <div className="form-group">
            <label htmlFor="log" className="control-label">Log:</label>
            <textarea className="form-control" rows="8" id="log" value={this.props.logText} ref={(textarea) => { this.textarea = textarea; }} />
          </div>
        </form>
      </div>
    );
  }
}
