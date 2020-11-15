import React, {Component} from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

// import './App.css';

class Header extends Component {

    renderSignInButton = () => {
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

export default Header;