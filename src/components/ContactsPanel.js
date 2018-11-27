import React, { Component } from "react";
import UsersListItems from './UsersListItems';
import UsersListSearchItems from './UsersListSearchItems';
import UsersListSearchInput from './UsersListSearchInput';
import { connect } from 'react-redux';

class ContactsPanel extends Component {

    onSearchTextChange = (value) => {
        console.log(value)
    }

    render() {
        return (
            <aside className="col-3 p-2 bg-light">
                <UsersListSearchInput onTextChange={this.onSearchTextChange} />
                {/* <UsersListItems /> */}
                <UsersListSearchItems />
            </aside>
        );
    }
}

const mapStateToProps = (state) => ({
    windowHeight: state.windowHeight
})

export default connect(mapStateToProps)(ContactsPanel);
