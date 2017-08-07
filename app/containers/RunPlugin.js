// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import RunPlugin from '../components/RunPlugin';
import * as PluginActions from '../actions/currentPlugin';


function mapStateToProps(state) {
  return {
    disabled: state.currentPlugin.isRunning
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PluginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RunPlugin);
