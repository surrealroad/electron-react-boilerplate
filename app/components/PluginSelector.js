// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import type { allPluginsType } from '../reducers/allPlugins';

export default class PluginSelector extends Component {
  props: {
    allPlugins: allPluginsType,
    selectPlugin: () => void
  };

  handleSelectChange = (event) => { // there's apparantly no way to make flowtype work
    console.log(`Selected plugin ${event.target.value}`);
    //store.dispatch({ type: APPEND_LOG, payload: 'yelllow' });
  }

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
            <select className="form-control" id="scriptselector" style={selectstyle} onChange={(event) => this.props.selectPlugin(Number(event.target.value))}>
              {
                this.props.allPlugins.map(plugin => {
                  if (plugin.id !== undefined && plugin.name !== undefined) {
                    return <option key={plugin.id} value={plugin.id}>{plugin.name}</option>;
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
