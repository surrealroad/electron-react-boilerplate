// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Dropdown } from 'hig-react';
import type { allPluginsType } from '../reducers/allPlugins';

// TODO:
// • convert to label when no plugins installed
// • convert to radio buttons when 4 or less

export default class PluginSelector extends Component {
  props: {
    allPlugins: allPluginsType,
    selectPlugin: () => void,
    disabled: boolean
  };

  render() {
    return (
      <div>
        <Dropdown
          id="scriptselector"
          label="Script to run"
          onChange={event => {
            this.props.selectPlugin(Number(event));
          }}
          disabled={this.props.disabled}
          options={this.props.allPlugins.map(plugin => {
            if (plugin.id !== undefined && plugin.name !== undefined) {
              return { value: plugin.id.toString(), label: plugin.name };
            }
            return '';
          })}
          //                {this.props.allPlugins.length &&
          // {!this.props.allPlugins.length && <option>No plugins installed</option>}
        />
      </div>
    );
  }
}
