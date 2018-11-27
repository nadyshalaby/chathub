import React, { Component } from "react";
export default class ChatForm extends Component {
  render() {
    return (
      <div className="input-group pb-2">
        <div className="input-group-prepend">
          <button
            className="btn btn-outline-primary ChatForm--action-btn"
            type="button"
          >
            <i className="flaticon-upload-to-cloud" />
          </button>
          <button
            className="btn btn-outline-primary ChatForm--action-btn"
            type="button"
          >
            <i className="flaticon-film" />
          </button>
          <button
            className="btn btn-outline-primary ChatForm--action-btn"
            type="button"
          >
            <i className="flaticon-phone-call" />
          </button>
          <button
            className="btn btn-outline-primary ChatForm--action-btn"
            type="button"
          >
            <i className="flaticon-photography" />
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Type a message..."
          aria-label="Type a message..."
          aria-describedby="button-send"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary ChatForm--action-btn"
            id="button-send"
            type="button"
          >
            <i className="flaticon-send" />
          </button>
        </div>
      </div>
    );
  }
}
