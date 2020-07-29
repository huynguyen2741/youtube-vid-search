import React from 'react';
import './VideoItem.css';

import {connect} from 'react-redux';
import {setSelectedVideo} from '../actions';

const VideoItem = ({vid, selectedVideo, setSelectedVideo}) => {
    // console.log(selectedVideo);
    return (
        <div className="video-item item" onClick={() => {setSelectedVideo(vid)}}>
            <img className="ui image" src={vid.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {vid.snippet.title}
                </div>
                <div className="description">
                    {vid.snippet.channelTitle}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {selectedVideo: state.selectedVideo};
}

export default connect(mapStateToProps, {setSelectedVideo})(VideoItem);