import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetial';
import SignIn from './SignIn';

import Header from './Header';

import './App.css';

require('dotenv').config();

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={VideoList} />
                <Route path='/detail' exact component={VideoDetail} />
                <Route path='/signin' exact component={SignIn} />
            </div>
        </BrowserRouter>
    );
}

export default App;