import React from 'react';
import '../VideoItem.css';

const VideoItem = ({vid,selectVideo}) => {
    return (
        <div className="video-item item" onClick={() => {selectVideo(vid)}}>
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

export default VideoItem;