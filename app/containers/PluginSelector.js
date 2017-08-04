// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PluginSelector from '../components/PluginSelector';
import * as currentPluginActions from '../actions/currentPlugin';

function mapStateToProps(state) {
  return {
    allPlugins: state.allPlugins
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentPluginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PluginSelector);
