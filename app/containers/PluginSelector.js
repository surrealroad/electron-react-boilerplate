// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PluginSelector from '../components/PluginSelector';
import * as currentPluginActions from '../actions/currentPlugin';

function mapStateToProps(state) {
  // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  const selectedPlugin = state.allPlugins.filter(plugin => plugin.id === state.currentPlugin.id)[0];
  return {
    allPlugins: state.allPlugins,
    disabled: state.currentPlugin.isRunning || selectedPlugin === undefined,
    currentPluginID: state.currentPlugin.id,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentPluginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PluginSelector);
