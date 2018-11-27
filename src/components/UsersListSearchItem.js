import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class UsersListSearchItem extends Component {
    render() {
        const { isActive, avatar, username, timeAgo } = this.props;
        return (
            <a href="#" className={`list-group-item list-group-item-action ${isActive ? 'active' : ''} p-2`}>
                <img
                    src={avatar? avatar : require("./../imgs/group-chat.jpeg")}
                    className="rounded-circle d-inline-block float-left"
                    alt="Avatar Image"
                    height="30"
                />
                <div className="float-right w-85 pt-1">
                    <div className="d-flex w-100 justify-content-between">
                        <b className="mb-1 w-75 text-ellipsis">{username}</b>
                        <small className="w-25">{timeAgo}</small>
                    </div>
                </div>
            </a>
        );
    }
}

UsersListSearchItem.propTypes = {
    isActive: PropTypes.bool,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    timeAgo: PropTypes.string.isRequired,
}
