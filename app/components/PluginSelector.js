// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import type { allPluginsType } from '../reducers/allPlugins';

export default class PluginSelector extends Component {
  props: {
    allPlugins: allPluginsType
  };

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
              {
                this.props.allPlugins.map(plugin => {
                  if (plugin.path && plugin.name) {
                    return <option key={plugin.path}>{plugin.name}</option>;
                  }
                  return '';
                })
              }
            </select>
          </div>
        </form>
      </div>
    );
  }
}
