import React, { Component } from "react";

export default class ChatMessage extends Component {

    msgBody = ({ username, time, msg }) => (
        <div className="message-body">
            <div className="message-info">
                <h4> {username} </h4>
                <h5> <i className="fa fa-clock-o"></i> {time} </h5>
            </div>
            <hr />
            <div className="message-text">
                {msg}
            </div>
        </div>
    )

    render() {
        const { isMine, avatar } = this.props;
        return (
            <div className={`message${isMine ? ' my-message' : ' info'}`}>
                <img alt="" className="img-circle medium-image" src={avatar} />
                {isMine ? <div className="message-body-inner">{this.msgBody(this.props)}</div> : this.msgBody(this.props)}
                <br />
            </div>
        );
    }
}
