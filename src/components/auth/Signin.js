import React, { Component } from "react";
import { AUTH_LOGIN_REQUEST } from "./../../constants";
import { connect } from "react-redux";
import { withAlert } from "react-alert";

class Auth extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = () => {
    this.setState({ email: this.email.value });
  };

  handlePassword = () => {
    this.setState({ password: this.password.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.authLoginRequest({ ...this.state, alert: this.props.alert });
  };

  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h3 className="register-heading">Welcome Back!</h3>
        <form className="row register-form" onSubmit={this.handleSubmit}>
          <div className="col">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                ref={email => (this.email = email)}
                onChange={this.handleEmail}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={this.state.password}
                ref={password => (this.password = password)}
                onChange={this.handlePassword}
              />
            </div>
            <input
              type="submit"
              className="btnRegister"
              disabled={this.props.loading}
              value={this.props.loading ? "Loading..." : "Continue ..."}
            />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = dispatch => ({
  authLoginRequest: payload => dispatch({ type: AUTH_LOGIN_REQUEST, payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAlert(Auth));
