// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import RunPlugin from '../components/RunPlugin';
import * as PluginActions from '../actions/currentPlugin';

function mapStateToProps(state) {
  // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  const selectedPlugin = state.allPlugins.filter(plugin => plugin.id === state.currentPlugin.id)[0];
  return {
    disabled: state.currentPlugin.isRunning || selectedPlugin === undefined,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PluginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RunPlugin);
