import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SignIn from './SignIn';
import CreateUser from './CreateUser';

import Header from './Header';

import '../styles/App.css';

require('dotenv').config();

const App = () => {
    return (
        <BrowserRouter>
            <div className="content">
                <Header />
                <div className="main_content">
                    <Route path='/' exact component={VideoList} />
                    <Route path='/detail' exact component={VideoDetail} />
                    <Route path='/signin' exact component={SignIn} />
                    <Route path='/createuser' exact component={CreateUser} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;