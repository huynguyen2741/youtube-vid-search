import React, {Component} from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';

import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SignIn from './SignIn';
import CreateUser from './CreateUser';
import history from '../history';

import Header from './Header';

import '../styles/App.css';

require('dotenv').config();

const App = () => {
    return (
        <Router history={history}>
            <div className="content">
                <Header />
                <div className="main_content">
                    <Route path='/' exact component={VideoList} />
                    <Route path='/detail' exact component={VideoDetail} />
                    <Route path='/signin' exact component={SignIn} />
                    <Route path='/createuser' exact component={CreateUser} />
                </div>
            </div>
        </Router>
    );
}

export default App;