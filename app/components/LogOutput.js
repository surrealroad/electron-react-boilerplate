// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class LogOutput extends Component {
  props: {
    logText: ?string
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="log" className="control-label">Log:</label>
            <textarea className="form-control" rows="8" id="log" value={this.props.logText} />
          </div>
        </form>
      </div>
    );
  }
}
