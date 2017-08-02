// @flow
import { connect } from 'react-redux';
import PluginSelector from '../components/PluginSelector';

function mapStateToProps(state) {
  return {
    allPlugins: state.allPlugins
  };
}

export default connect(mapStateToProps)(PluginSelector);
