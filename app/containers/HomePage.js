// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { remote } from 'electron';
import Home from '../components/Home';
import * as allPluginActions from '../actions/allPlugins';
import * as currentPluginActions from '../actions/currentPlugin';

const fs = require('fs');
const path = require('path');

// https://gist.github.com/oliverswitzer/9194629
function pyExtension(element) {
  const extName = path.extname(element);
  return extName === '.py';
}

// https://stackoverflow.com/a/1414175/262455
function stringToBoolean(string) {
  switch (string.toLowerCase().trim()) {
    case 'true':
    case 'yes':
    case '1':
      return true;
    case 'false':
    case 'no':
    case '0':
    case null:
      return false;
    default:
      return Boolean(string);
  }
}

export class HomePage extends Component {
  props: {
    setPluginParams: () => void,
    exec: () => void,
    removeAllPlugins: () => void,
    addPlugin: () => void,
    selectPlugin: () => void
  };

  componentDidMount() {
    // https://discuss.atom.io/t/how-to-get-startup-arguments-from-electron-app/35353/2
    console.log(`Launched with options: ${remote.process.argv}`);
    // expected URL in the form
    //     bandolier://sg_gantt?user_id=42&user_login=jack.james&title=&entity_type=Task&server_hostname=nightingale.shotgunstudio.com&referrer_path=%2Fdetail%2FHumanUser%2F42&page_id=1861&session_uuid=dd8841a0-41cb-11e5-9b33-0242ac110002&project_name=Nightingale%20VFX&project_id=67&ids=2076%2C2077%2C2078%2C2132%2C2133%2C2134%2C2135%2C2136%2C2137%2C2138&selected_ids=2076%2C2078%2C2132%2C2133%2C2136&cols=content&cols=step&cols=sg_status_list&cols=task_assignees&cols=start_date&cols=due_date&cols=duration&cols=entity&column_display_names=Task%20Name&column_display_names=Pipeline%20Step&column_display_names=Status&column_display_names=Assigned%20To&column_display_names=Start%20Date&column_display_names=Due%20Date&column_display_names=Duration&column_display_names=Link&grouping_column=entity&grouping_method=exact&grouping_direction=asc

    // reset plugin list
    this.props.removeAllPlugins();

    // parse scripts from folder
    const scriptFolder = process.cwd();
    let pluginID = 0;
    fs.readdir(scriptFolder, (err, dir) => {
      dir.filter(pyExtension).forEach(pyFile => {
        if (pyFile === 'wrapper.py') return;
        console.log(`Installing plugin ${pyFile}`);
        const pluginSettings = {
          id: (pluginID += 1),
          path: pyFile,
          name: '',
          description: '',
          chooseFolder: false,
          chooseFile: false,
          saveFile: false,
          quitAfter: false,
          notifyAfter: true,
          visible: true,
          authenticateUser: false,
          siteURL: '',
        };
        // parse the file for settings
        // https://stackoverflow.com/a/41453090/262455
        const pluginSourceLines = fs
          .readFileSync(path.join(scriptFolder, pyFile), 'utf-8')
          .toString()
          .split('\n');
        pluginSourceLines.forEach(line => {
          // http://regexr.com/3gikc
          let match = line.match(/^@SGS_NAME:\s*(.*)/);
          if (match) {
            pluginSettings.name = match[1];
          }
          match = line.match(/^@SGS_DESCRIPTION:\s*(.*)/);
          if (match) {
            pluginSettings.description = match[1];
          }
          match = line.match(/^@SGS_CHOOSEFOLDER:\s*(.*)/);
          if (match) {
            pluginSettings.chooseFolder = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_CHOOSEFILE:\s*(.*)/);
          if (match) {
            pluginSettings.chooseFile = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_SAVEFILE:\s*(.*)/);
          if (match) {
            pluginSettings.saveFile = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_QUITAFTER:\s*(.*)/);
          if (match) {
            pluginSettings.quitAfter = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_NOTIFYAFTER:\s*(.*)/);
          if (match) {
            pluginSettings.notifyAfter = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_VISIBLE:\s*(.*)/);
          if (match) {
            pluginSettings.visible = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_USERAUTHENTICATION:\s*(.*)/);
          if (match) {
            pluginSettings.authenticateUser = stringToBoolean(match[1]);
          }
          match = line.match(/^@SGS_SITEURL:\s*(.*)/);
          if (match) {
            pluginSettings.siteURL = match[1];
          }
        });
        // SGS_NAME is required
        if (pluginSettings.name) {
          console.log(pluginSettings);
          this.props.addPlugin(pluginSettings);
          // reset to the first plugin
          // TODO make this less hacky
          // this.props.selectPlugin(1);
        } else {
          console.log(`Skipping script ${pluginSettings.path} as it has no @SGS_NAME value set.`);
        }
      });
    });

    if (remote.process.argv[0].startsWith('bandolier://')) {
      const url = new URL(remote.process.argv[0]);
      console.log(url);

      const scriptName = url.hostname;
      // TODO
      // Autoselect plugin
      const queryParams = {};
      // turn into a more reasonable object
      for (const p of url.searchParams) {
        if (p[0] in queryParams) {
          if (queryParams[p[0]] instanceof Array === false) {
            queryParams[p[0]] = [queryParams[p[0]]];
          }
          queryParams[p[0]].push(p[1]);
        } else {
          queryParams[p[0]] = p[1];
        }
      }
      console.log('Parameters:', queryParams);
      this.props.setPluginParams(queryParams);
      this.props.exec();
    }
  }
  render() {
    return <Home />;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...allPluginActions, ...currentPluginActions }, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);
