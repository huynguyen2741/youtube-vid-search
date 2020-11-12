import React, {Component} from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom';

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
            <div className="main-content">
                <div className="ui grid">
                    <div className="ui row heading">
                        <div className="three wide column">
                            <div className="home icon">
                                <a href="/">
                                    <button className="ui button brown">Home Page</button>
                                </a>
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