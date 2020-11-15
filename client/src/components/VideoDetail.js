import React from 'react';
import Faker from 'faker';

import {connect} from 'react-redux';
import videoList from './VideoList';
import VideoList from './VideoList';

import '../styles/VideoDetail.css';

const VideoDetail = ({selectedVideo}) => {
    // console.log(selectedVideo);
    // if no selected video => render blank <iframe>
    if (!selectedVideo) {
        return (
            <div className="ui grid">
                <div className="ui row content">
                    <div className="eleven wide column">
                        <div className="video_detail">
                            <div className="ui embed">
                                <iframe src />
                            </div>
                        </div>
                    </div>
                    <div className="five wide column">
                        <VideoList />
                    </div>
                </div>
            </div>
        );
    }

    const src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    const publishDate = date => {
        let dateString = selectedVideo.snippet.publishedAt;
        const indexOfT = dateString.indexOf('T');
        dateString = dateString.substring(0, indexOfT);
        const year = dateString.substring(0, 4);
        dateString = dateString.substring(year.length + 1);
        const month = dateString.substring(0, 2);
        const day = dateString.substring(month.length + 1);
        dateString = new Date();
        return `${month} - ${day} - ${year}`;
    }

    return (
        <div className="ui grid">
            <div className="ui row content">
                <div className="eleven wide column">
                    <div className="video-detail">
                        <div className="ui segments">
                            <div className="ui segment">
                                <div className="ui embed">
                                    <iframe src={src} />
                                </div>
                            </div>
                            <div className="ui segment">
                                <h3>{selectedVideo.snippet.title}</h3>
                                <p>Published at: {publishDate(selectedVideo.snippet.publishedAt)}</p>
                            </div>
                            <div className="ui segment">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="five wide column">
                    <VideoList />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedVideo: state.selectedVideo,
        videoList: state.videoList
    };
}

export default connect(mapStateToProps)(VideoDetail);