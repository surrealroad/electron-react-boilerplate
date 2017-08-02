// @flow
import { connect } from 'react-redux';
import LogOutput from '../components/LogOutput';

function mapStateToProps(state) {
  return {
    logText: state.logOutput
  };
}

export default connect(mapStateToProps)(LogOutput);
