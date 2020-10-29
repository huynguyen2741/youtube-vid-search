import React from 'react';
import SearchBar from './SearchBar';

export default () => {
    return (
        <div className="main-content">
            <div className="ui grid">
                <div className="ui row heading">
                    <div className="three wide column">
                        <div className="home icon">
                            <button className="ui button">Youtube-clone</button>
                        </div>
                    </div>
                    <div className="ten wide column">
                        {/* <SearchBar termSubmit={this.termSubmit} /> */}
                        <SearchBar />
                    </div>
                    <div className="three wide column">
                        <div className="utilies">
                            <div className="ui avatar">
                                Sample account.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}