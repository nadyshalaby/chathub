import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class UsersListItem extends Component {
    render() {
        const { isActive, avatar, username, timeAgo, msg } = this.props;
        return (
            <a href="#" className={`list-group-item list-group-item-action ${isActive ? 'active' : ''} p-2`}>
                <img
                    src={avatar}
                    className="rounded-circle d-inline-block float-left w-25"
                    alt="Avatar Image"
                    height="75"
                />
                <div className="d-flex flex-column float-right w-75">
                    <div className="d-flex w-100 justify-content-between">
                        <b className="mb-1 w-70 text-ellipsis">{username}</b>
                        <small className="w-30">{timeAgo}</small>
                    </div>
                    <p className="mb-1 UsersList--last-msg">{msg}</p>
                </div>
            </a>
        );
    }
}

UsersListItem.propTypes = { 
    isActive: PropTypes.bool, 
    avatar: PropTypes.string.isRequired, 
    username: PropTypes.string.isRequired, 
    timeAgo: PropTypes.string.isRequired, 
    msg: PropTypes.string.isRequired
}