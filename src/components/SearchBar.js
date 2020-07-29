import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setSearchTerm, getVideoList} from '../actions';

class SearchBar extends Component {
    // state = {searchTerm: null};

    //set search term everytime input is changed.
    inputChange = input => {

        this.props.setSearchTerm(input.target.value);
        // console.log(this.props.searchTerm);
    }

    //subbmit searchTerm to getVideoList action and set the list to state.videoList
    termSubmit = async event => {
        event.preventDefault();
        const response = await this.props.getVideoList(this.props.searchTerm);
        // console.log(this.props.videoList);
    }

    render() {
        return (
            <div className="search-bar ui">
                <form className="ui form" onSubmit={this.termSubmit}>
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Search" onChange={this.inputChange} />
                        <button type="submit" className="ui button">
                            <i className="search icon" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm,
        videoList: state.videoList
    };
}

export default connect(mapStateToProps, {setSearchTerm, getVideoList})(SearchBar);