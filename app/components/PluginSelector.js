// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import type { allPluginsType } from '../reducers/allPlugins';

export default class PluginSelector extends Component {
  props: {
    allPlugins: allPluginsType,
    selectPlugin: () => void,
    disabled: boolean
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
            <label htmlFor="scriptselector" className="col-sm-2 control-label">
              Script to run:
            </label>
            <select
              className="form-control"
              id="scriptselector"
              style={selectstyle}
              onChange={event => this.props.selectPlugin(Number(event.target.value))}
              disabled={this.props.disabled}
            >
              {this.props.allPlugins.length &&
                this.props.allPlugins.map(plugin => {
                  if (plugin.id !== undefined && plugin.name !== undefined) {
                    return (
                      <option key={plugin.id} value={plugin.id}>
                        {plugin.name}
                      </option>
                    );
                  }
                  return '';
                })}
              {!this.props.allPlugins.length && <option>No plugins installed</option>}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
