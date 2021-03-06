// @flow
import { connect } from 'react-redux';
import Progress from '../components/Progress';

function mapStateToProps(state) {
  return {
    hidden: !state.currentPlugin.isRunning,
    size: 25
  };
}

export default connect(mapStateToProps)(Progress);
