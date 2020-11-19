import React, {Component} from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../actions';
// import userReducer from '../reducers/userReducer';

// import './App.css';

class Header extends Component {

    renderSignInButton = () => {
        if (this.props.user.signedIn) {
            return (
                <div>
                    {/* <Link to='/playlist' className="ui blue button">Liked Playlist</Link> */}
                    <button className="ui button red" onClick={this.props.signOut}>Sign Out</button>
                </div >
            );
        }
        return (
            <Link to="/signin" className="ui button primary">
                Sign In
            </Link>
        );
    }

    render() {
        return (
            <div className="header">
                <div className="ui grid">
                    <div className="ui row heading">
                        <div className="three wide column">
                            <div className="home icon">
                                {/* <a href="/"> */}
                                <Link to="/" className="ui button brown">Home Page</Link>
                                {/* </a> */}
                            </div>
                        </div>
                        <div className="nine wide column">
                            {/* <SearchBar termSubmit={this.termSubmit} /> */}
                            <SearchBar />
                        </div>
                        <div className="three wide column">
                            <div className="utilies">
                                <div>{this.renderSignInButton()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {user: state.user, }
}

export default connect(mapStateToProps, {signOut})(Header);