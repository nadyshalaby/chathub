import React, { Component } from "react";

class Auth extends Component {
  render() {
    return (
      <div
        className="tab-pane fade show"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <h3 className="register-heading">Create an Account</h3>
        <div className="row register-form">
          <div className="col">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <div className="maxl">
                <label className="radio inline">
                  <input
                    type="checkbox"
                    name="terms"
                    defaultValue="male"
                    defaultChecked
                  />
                  <span>
                    &nbsp; You agree with our Terms & Conditions and Privacy
                    Statement
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password *"
                defaultValue=""
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option className="hidden" selected disabled>
                  Select your Security Question
                </option>
                <option>What is your Birthdate?</option>
                <option>What is Your old Phone Number?</option>
                <option>What is your Uncle Name?</option>
                <option>What is the Color of your Shoes?</option>
                <option>What is your Pet Name?</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Answer *"
                defaultValue=""
              />
            </div>
            <input
              type="submit"
              className="btnRegister"
              defaultValue="Register"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
