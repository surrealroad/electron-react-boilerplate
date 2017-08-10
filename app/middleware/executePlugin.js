import * as child from 'child_process';
import { SET_LOG, APPEND_LOG } from '../actions/logOutput';
import { EXEC_PLUGIN, START_RUNNING, STOP_RUNNING } from '../actions/currentPlugin';

function createStreamOutputMiddleware() {
  return (store) => (next) => (action) => {
    // Stream the output of a process to the logOutput
    // https://gist.github.com/dmichael/9dc767fca93624df58b423d01e485402
    let proc = {};
    const pluginFunction = 'process_action';
    const pluginArguments = [];
    let selectedPlugin = {};
    let env = {};

    switch (action.type) {
      case EXEC_PLUGIN:
        if (store.getState().currentPlugin.isRunning) {
          console.log('Unable to start a new plugin as one is currently running');
          break;
        }
        // https://stackoverflow.com/questions/13964155/get-javascript-object-from-array-of-objects-by-value-or-property
        selectedPlugin = store.getState().allPlugins.filter(
          (plugin) => plugin.id === store.getState().currentPlugin.id
        )[0];

        // set arguments

        if (store.getState().currentPlugin.params) {
          pluginArguments.push(JSON.stringify(store.getState().currentPlugin.params));
        }

        console.log(`Running ${selectedPlugin.path}:${pluginFunction} with arguments: ${pluginArguments}`);
        store.dispatch({ type: START_RUNNING });
        store.dispatch({ type: SET_LOG, payload: `Running ${selectedPlugin.name}\n` });
        env = process.env;
        env.PYTHONPATH += `:${process.cwd()}/API`;

        // https://github.com/chentsulin/electron-react-boilerplate/issues/599
        proc = child.spawn('/usr/bin/python', ['-u', `${process.cwd()}/wrapper.py`,
          `${process.cwd()}/${selectedPlugin.path}`,
          `${pluginFunction}`].concat(pluginArguments),
          { env });
        proc.stdout.on('data', data => {
          console.log(data.toString());
          store.dispatch({ type: APPEND_LOG, payload: data.toString() });
        })
        .on('close', code => {
          console.log(`Plugin completed with code ${code}`);
          store.dispatch({ type: STOP_RUNNING });
        })
        .on('error', spawnError => {
          console.error(spawnError);
          store.dispatch({ type: STOP_RUNNING });
        });
        proc.stderr.on('data', data => {
          console.log(data.toString());
          store.dispatch({ type: APPEND_LOG, payload: data.toString() });
        })
        .on('error', spawnError => {
          console.error(spawnError);
          store.dispatch({ type: STOP_RUNNING });
        });
        break;

      default:
        break;
    }

    return next(action);
  };
}
const streamOutput = createStreamOutputMiddleware();

export default streamOutput;
