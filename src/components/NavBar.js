import React, { Component } from "react";
import AppLogo from "../imgs/app-logo.svg";
import Avatar from "../imgs/avatar.png";

export default class ChatNav extends Component {
  render() {
    return (
      <nav className="navbar  navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={AppLogo}
            width="30"
            height="30"
            className="d-inline-block align-top mr-1"
            alt=""
          />
          ChatHub
        </a>
        <div className="justify-content-center text-center">
          <h4>Jeffrey Way</h4>
          <span>ChatHub</span>
        </div>
        <a href="#" className="justify-content-end">
          John Doe
          <img
            src={Avatar}
            className="rounded-circle d-inline-block align-top ml-1"
            alt="Avatar Image"
            width="30"
            height="30"
          />
        </a>
      </nav>
    );
  }
}
