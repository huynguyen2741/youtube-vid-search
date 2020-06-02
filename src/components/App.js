import React,{Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetial';

import './App.css';

require('dotenv').config();
console.log(process.env);

class App extends Component {
    // TODO
    //      Comment
    state = {videos: [],selectedVideo: null};

    /*
        After receive searchTerm from SearchBar
        Make GET request and get videos from youtube API's response 
        Set videos to state.to be used.
    */
    termSubmit = async (searchTerm) => {
        // look at sample.env for API_KEY
        const API_KEY = process.env.REACT_APP_API_KEY;

        const connection = await axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3'
        });

        const response = await connection.get('/search',
            {
                params: {
                    key: API_KEY,
                    q: searchTerm,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 7
                }
            }
        );

        const responseVids = response.data.items;

        this.setState({videos: responseVids});
    }

    selectVideo = (selectedVideo) => {
        this.setState({selectedVideo: selectedVideo});
    }

    render() {
        // console.log(this.state.videos);
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
                            <SearchBar termSubmit={this.termSubmit} />
                        </div>
                        <div className="three wide column">
                            <div className="utilies">
                                <div className="ui avatar">
                                    Sample account.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ui row content">
                        <div className="eleven wide column">
                            <VideoDetail selectedVid={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList vids={this.state.videos} selectVideo={this.selectVideo} />
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default App;