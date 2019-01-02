import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";

export class ChangePassword extends Component {
  render() {
    return (
      <div className="container full-height">
        <div className="row h-100 align-items-center">
          <div className="col-4 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <h3>
                    <FontAwesomeIcon icon={faUnlock} size="2x" />
                  </h3>
                  <h2 className="text-center">Setup New Password?</h2>
                  <p>You can change your password here.</p>
                  <div className="card-body">
                    <form
                      id="register-form"
                      autoComplete="off"
                      className="form"
                      method="post"
                    >
                      <div>
                        <label>New Password</label>
                        <div className="form-group pass_show">
                          <input
                            type="password"
                            defaultValue="faisal.khan@123"
                            className="form-control"
                            placeholder="New Password"
                          />
                        </div>
                        <label>Confirm Password</label>
                        <div className="form-group pass_show">
                          <input
                            type="password"
                            defaultValue="faisal.khan@123"
                            className="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          name="recover-submit"
                          className="btn btn-lg btn-primary btn-block"
                          defaultValue="Reset Password"
                          type="submit"
                        />
                      </div>
                      <input
                        type="hidden"
                        className="hide"
                        name="token"
                        id="token"
                        defaultValue
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
