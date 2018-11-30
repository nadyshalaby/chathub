import React from "react";
import Chat from "./Chat";
import { history } from "../store";
import Auth from "./auth";
import Authenticated from "./auth/Authenticated";
import Guest from "./auth/Guest";
import AlertTemplate from "react-alert-template-basic";
import { Provider as Alert } from "react-alert";
import { ConnectedRouter as Router } from "connected-react-router";
import { Switch } from "react-router-dom";
import { connect } from "react-redux";
import { UPDATE_AUTH_DETAILS, CHATHUB_AUTH_DETAILS } from "../constants";

class Routes extends React.Component {
  // optional cofiguration
  options = {
    position: "top center",
    timeout: 5000,
    offset: "30px",
    transition: "scale"
  };

  componentWillMount() {
    const details = localStorage.getItem(CHATHUB_AUTH_DETAILS);
    if (details) {
      this.props.updateAuthDetails(JSON.parse(details));
    }
  }

  render() {
    return (
      <Router history={history}>
        <Alert template={AlertTemplate} {...this.options}>
          <Switch>
            <Authenticated path="/" exact component={Chat} />
            <Guest path="/auth" component={Auth} />
          </Switch>
        </Alert>
      </Router>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateAuthDetails: payload => dispatch({ type: UPDATE_AUTH_DETAILS, payload })
});

export default connect(
  null,
  mapDispatchToProps
)(Routes);
