import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Guest = ({ authenticated, component, redirectTo = "/", ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        authenticated ? (
          <Redirect to={redirectTo} />
        ) : (
          <Route component={component} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  authenticated: state.global.authToken && state.global.userId
});

export default connect(
  mapStateToProps,
  null
)(Guest);
