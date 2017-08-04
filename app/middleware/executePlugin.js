import * as child from 'child_process';
import { APPEND_LOG } from '../actions/logOutput';
import { EXEC_PLUGIN, START_RUNNING, STOP_RUNNING } from '../actions/currentPlugin';

function createStreamOutputMiddleware() {
  return (store) => (next) => (action) => {
    // Stream the output of a process to the logOutput
    // https://gist.github.com/dmichael/9dc767fca93624df58b423d01e485402
    let proc = {};
    const pluginPath = '';
    const pluginFunction = '';
    const pluginArguments = [];

    switch (action.type) {
      case EXEC_PLUGIN:
        console.log(`Running ${pluginPath}:${pluginFunction} with arguments: ${pluginArguments}`);
        store.dispatch({ type: START_RUNNING });

        // https://github.com/chentsulin/electron-react-boilerplate/issues/599
        proc = child.spawn('/usr/bin/python', ['-u', `${process.cwd()}/wrapper.py`]);
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
        break;

      default:
        break;
    }

    return next(action);
  };
}
const streamOutput = createStreamOutputMiddleware();

export default streamOutput;
