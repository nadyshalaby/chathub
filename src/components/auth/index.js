import React, { Component } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

class Auth extends Component {
  render() {
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt />
            <h3>ChatHub</h3>
            <p>
              Share and exchange messages, photos and videos with others, and
              don't worry about your privacy
            </p>
            <input type="submit" name value="Explore" />
            <br />
          </div>
          <div className="col-md-9 register-right">
            <ul
              className="nav nav-tabs nav-justified"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Sign up
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <Signin />
              <Signup />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
