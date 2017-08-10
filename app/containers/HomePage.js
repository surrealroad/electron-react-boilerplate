// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { remote } from 'electron';
import Home from '../components/Home';
import * as currentPluginActions from '../actions/currentPlugin';

export class HomePage extends Component {
  props: {
    setPluginParams: () => void
  };

  componentDidMount() {
    // https://discuss.atom.io/t/how-to-get-startup-arguments-from-electron-app/35353/2
    console.log(`Launched with options: ${remote.process.argv}`);
    // expected URL in the form
    //     bandolier://sg_gantt?user_id=42&user_login=jack.james&title=&entity_type=Task&server_hostname=nightingale.shotgunstudio.com&referrer_path=%2Fdetail%2FHumanUser%2F42&page_id=1861&session_uuid=dd8841a0-41cb-11e5-9b33-0242ac110002&project_name=Nightingale%20VFX&project_id=67&ids=2076%2C2077%2C2078%2C2132%2C2133%2C2134%2C2135%2C2136%2C2137%2C2138&selected_ids=2076%2C2078%2C2132%2C2133%2C2136&cols=content&cols=step&cols=sg_status_list&cols=task_assignees&cols=start_date&cols=due_date&cols=duration&cols=entity&column_display_names=Task%20Name&column_display_names=Pipeline%20Step&column_display_names=Status&column_display_names=Assigned%20To&column_display_names=Start%20Date&column_display_names=Due%20Date&column_display_names=Duration&column_display_names=Link&grouping_column=entity&grouping_method=exact&grouping_direction=asc

    const url = new URL('bandolier://sg_gantt?user_id=42&user_login=jack.james&title=&entity_type=Task&server_hostname=nightingale.shotgunstudio.com&referrer_path=%2Fdetail%2FHumanUser%2F42&page_id=1861&session_uuid=dd8841a0-41cb-11e5-9b33-0242ac110002&project_name=Nightingale%20VFX&project_id=67&ids=2076%2C2077%2C2078%2C2132%2C2133%2C2134%2C2135%2C2136%2C2137%2C2138&selected_ids=2076%2C2078%2C2132%2C2133%2C2136&cols=content&cols=step&cols=sg_status_list&cols=task_assignees&cols=start_date&cols=due_date&cols=duration&cols=entity&column_display_names=Task%20Name&column_display_names=Pipeline%20Step&column_display_names=Status&column_display_names=Assigned%20To&column_display_names=Start%20Date&column_display_names=Due%20Date&column_display_names=Duration&column_display_names=Link&grouping_column=entity&grouping_method=exact&grouping_direction=asc');
    console.log(url);
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

    if (remote.process.argv[0].startsWith('bandolier://')) {
      const url = URL(remote.process.argv[0]);
    }
  }
  render() {
    return (
      <Home />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentPluginActions, dispatch);
}

export default connect(null, mapDispatchToProps)(HomePage);
