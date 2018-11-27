import React, { Component } from "react";
import Avatar from "../imgs/avatar.png";
import { Scrollbars } from 'react-custom-scrollbars';
import UsersListItem from './UsersListItem';
import { connect } from 'react-redux';

class UsersListItems extends Component {


    render() {
        return (
            <div>
                <span className="UsersList--search-title py-1">Last Messages</span>
                <Scrollbars
                    autoHide
                    style={{ height: this.props.windowHeight - 157 }} >
                    <div className="list-group UsersList--items-wrapper">
                        <UsersListItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                        <UsersListItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                        <UsersListItem isActive avatar={Avatar} username="Ahmed Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                        <UsersListItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                        <UsersListItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                        <UsersListItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" msg="Donec id elit non mi porta gravida at eget metus." />
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.windowHeight
})

export default connect(mapStateToProps)(UsersListItems);
