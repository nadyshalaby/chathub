import React, { Component } from "react";
import Avatar from "../imgs/avatar.png";
import { Scrollbars } from 'react-custom-scrollbars';
import UsersListSearchItem from './UsersListSearchItem';
import { connect } from 'react-redux';

class UsersListSearchItems extends Component {

    render() {
        return (
            <div>
                <span className="UsersList--search-title py-1">Search Results</span>
                <Scrollbars
                    autoHide
                    style={{ height: this.props.windowHeight - 157 }} >
                    <div className="list-group UsersList--items-wrapper">
                        <UsersListSearchItem username="Nady Shalaby" timeAgo="3 min ago" />
                        <UsersListSearchItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" />
                        <UsersListSearchItem isActive avatar={Avatar} username="Ahmed Shalaby" timeAgo="3 min ago" />
                        <UsersListSearchItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" />
                        <UsersListSearchItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" />
                        <UsersListSearchItem avatar={Avatar} username="Nady Shalaby" timeAgo="3 min ago" />
                    </div>
                </Scrollbars>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.windowHeight
})

export default connect(mapStateToProps)(UsersListSearchItems);
