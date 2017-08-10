// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import CopyToClipboard from '../components/CopyToClipboard';
import * as ClipboardActions from '../actions/clipboard';


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ClipboardActions, dispatch);
}

export default connect(null, mapDispatchToProps)(CopyToClipboard);
