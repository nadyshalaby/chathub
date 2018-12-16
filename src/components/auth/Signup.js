import React, { Component } from "react";
import { AUTH_UPDATE_ERRORS, AUTH_SIGNUP_REQUEST } from "./../../constants";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import { isEmail, isAlpha, equals, isEmpty, matches, trim } from "validator";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repassword: "",
    securityQuestion: "",
    answer: "",
    hasTerms: true,
    securityQuestion: ""
  };

  /**
   * Handle form validations and display errors
   */
  validateForm = () => {
    const errors = {};
    const { alert, securityQuestions } = this.props;
    const {
      firstName,
      lastName,
      email,
      password,
      repassword,
      securityQuestion,
      answer,
      hasTerms
    } = this.state;

    errors.firstName = isEmpty(trim(firstName)) || !isAlpha(trim(firstName));
    errors.lastName = !isEmpty(trim(lastName)) && !isAlpha(trim(lastName));
    errors.email = isEmpty(trim(email)) || !isEmail(trim(email));
    errors.password =
      isEmpty(trim(password)) ||
      !matches(trim(password), /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/i);
    errors.repassword =
      isEmpty(trim(repassword)) || !equals(trim(password), trim(repassword));
    errors.securityQuestion =
      isEmpty(securityQuestion) ||
      !securityQuestions.includes(securityQuestion);
    errors.answer = isEmpty(trim(answer));
    errors.hasTerms = !hasTerms;

    this.props.authUpdateErrors(errors);

    for (let prop in errors) {
      if (errors[prop]) {
        alert.error("Plz, correct shown errors and try again!");
        return false;
      }
    }

    return true;
  };

  /**
   * Capture form inputs changes
   * @param {object} e
   */
  inputChanged = e => {
    const { name, value } = e.target;

    switch (name) {
      case "terms":
        this.setState({ hasTerms: e.target.checked });
        break;
      default:
        this.setState({ [name]: value });
    }
  };

  /**
   * Handle form submission
   * @param {object} e
   */
  handleSubmit = e => {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.authSignupRequest({ ...this.state, alert: this.props.alert });
    }
  };
  render() {
    const { loading, errors, securityQuestions } = this.props;
    return (
      <div
        className="tab-pane fade show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <h3 className="register-heading">Create an Account</h3>
        <form onSubmit={this.handleSubmit} className="row register-form">
          <div className="col">
            <div className="form-group">
              <input
                type="text"
                className={`form-control${
                  errors.firstName ? " is-invalid" : ""
                }`}
                placeholder="First Name *"
                data-toggle="tooltip"
                data-placement="top"
                title="e.g. John"
                name="firstName"
                value={this.state.firstName}
                onChange={this.inputChanged}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control${
                  errors.password ? " is-invalid" : ""
                }`}
                data-toggle="tooltip"
                data-placement="top"
                title="Password may have at least one letter, one digit and >= 8 chars in size."
                placeholder="Password *"
                name="password"
                value={this.state.password}
                onChange={this.inputChanged}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className={`form-control${errors.email ? " is-invalid" : ""}`}
                placeholder="Email *"
                data-toggle="tooltip"
                data-placement="top"
                title="e.g. john.doe@example.com"
                name="email"
                value={this.state.email}
                onChange={this.inputChanged}
              />
            </div>
            <div className="form-group">
              <div className="maxl">
                <label
                  className={`radio inline${
                    errors.hasTerms ? " text-danger" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="terms"
                    checked={this.state.hasTerms}
                    onChange={this.inputChanged}
                  />
                  <span>
                    &nbsp; Agree with our Terms, Conditions & Privacy Statement
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <input
                type="text"
                className={`form-control${
                  errors.lastName ? " is-invalid" : ""
                }`}
                placeholder="Last Name"
                data-toggle="tooltip"
                data-placement="top"
                title="e.g. Doe"
                name="lastName"
                value={this.state.lastName}
                onChange={this.inputChanged}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className={`form-control${
                  errors.repassword ? " is-invalid" : ""
                }`}
                placeholder="Confirm Password *"
                name="repassword"
                value={this.state.repassword}
                onChange={this.inputChanged}
              />
            </div>
            <div className="form-group">
              <select
                className={`form-control${
                  errors.securityQuestion ? " is-invalid" : ""
                }`}
                data-toggle="tooltip"
                data-placement="top"
                title="Security question is used for password resets, account deletion, ...etc."
                name="securityQuestion"
                value={this.state.securityQuestion}
                onChange={this.inputChanged}
              >
                <option value="" disabled>
                  Select your Security Question
                </option>
                {securityQuestions.map((question, index) => (
                  <option key={index}>{question}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className={`form-control${errors.answer ? " is-invalid" : ""}`}
                placeholder="Answer *"
                name="answer"
                value={this.state.answer}
                onChange={this.inputChanged}
              />
            </div>
            <input
              type="submit"
              className="btnRegister"
              disabled={loading}
              value={loading ? "Loading..." : "Register"}
            />
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  securityQuestions: PropTypes.array.isRequired,
  authSignupRequest: PropTypes.func.isRequired,
  authUpdateErrors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  errors: state.auth.errors,
  securityQuestions: state.auth.securityQuestions
});

const mapDispatchToProps = dispatch => ({
  authSignupRequest: payload =>
    dispatch({ type: AUTH_SIGNUP_REQUEST, payload }),
  authUpdateErrors: payload => dispatch({ type: AUTH_UPDATE_ERRORS, payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAlert(Signup));
