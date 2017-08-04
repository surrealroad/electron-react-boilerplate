// @flow
import { connect } from 'react-redux';
import PluginDescription from '../components/PluginDescription';

function mapStateToProps(state) {
  // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
  const selectedPlugin = state.allPlugins.filter(
    (plugin) => plugin.id === state.currentPlugin.id
  )[0];
  if (selectedPlugin !== undefined) {
    return {
      pluginDescription: selectedPlugin.description
    };
  }

  return {
    pluginDescription: 'No selection'
  };
}

export default connect(mapStateToProps)(PluginDescription);
