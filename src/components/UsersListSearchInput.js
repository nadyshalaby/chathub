import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default class UsersListSearchInput extends Component {

    onTextChange = (event) => {
        this.props.onTextChange(event.target.value)
    }

    render() {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                    <button className="btn bg-white border border-right-0 rounded-left shadow-none" type="button" id="button-addon1">
                        <FontAwesomeIcon icon={ faSearch } />
                    </button>
                </div>
                <input type="text" placeholder="Search" className="form-control shadow-none border border-left-0" onChange={this.onTextChange} />
            </div>
        );
    }
}
