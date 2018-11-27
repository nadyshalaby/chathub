import React, { Component } from "react";
import NavBar from "./NavBar";
import ContactsPanel from './ContactsPanel';
import InfoPanel from './InfoPanel';
import ChatMessages from './ChatMessages';

export default class Chat extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <NavBar />
                <div className="d-flex">
                    <ContactsPanel />
                    <ChatMessages />
                    <InfoPanel />
                </div>
            </div>
        );
    }
}
