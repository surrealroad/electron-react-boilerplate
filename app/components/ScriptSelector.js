// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class ScriptSelector extends Component {
  render() {
    // fix bootstrap not rendering selects inline with label
    const selectstyle = {
      width: 'auto',
      display: 'inline-block',
    };
    return (
      <div>
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="scriptselector" className="col-sm-2 control-label">Script to run:</label>
            <select className="form-control" id="scriptselector" style={selectstyle}>
              <option>Script 1</option>
              <option>Script 2</option>
              <option>Script 3</option>
              <option>Script 4</option>
              <option>Script 5</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
