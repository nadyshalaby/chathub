import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Authenticated = ({
  authenticated,
  component,
  redirectTo = "/auth",
  ...rest
}) => {
  // if (test instanceof Function || typeof test === "function") test = test();

  return (
    <Route
      {...rest}
      render={() =>
        authenticated ? (
          <Route component={component} />
        ) : (
          <Redirect to={redirectTo} />
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
)(Authenticated);
