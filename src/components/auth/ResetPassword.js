import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export class ResetPassword extends Component {
  render() {
    return (
      <div className="container full-height">
        <div className="row h-100 align-items-center">
          <div className="col-4 mx-auto">
            <div className="card">
              <div className="card-body">
                <div className="text-center">
                  <h3>
                    <FontAwesomeIcon icon={faLock} size="2x" />
                  </h3>
                  <h2 className="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div className="card-body">
                    <form
                      id="register-form"
                      autoComplete="off"
                      className="form"
                      method="post"
                    >
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="basic-addon1"
                        />
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

export default ResetPassword;
