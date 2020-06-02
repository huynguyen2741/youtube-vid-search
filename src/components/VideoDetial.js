import React from 'react';

import './VideoDetail.css';

const VideoDetail = ({selectedVid}) => {
    // if no selected video => render blank <iframe>
    if (!selectedVid) {
        return (
            <div className="video-detail">
                <div className="ui embed">
                    <iframe src />
                </div>
            </div>
        );
    }

    const src = `https://www.youtube.com/embed/${selectedVid.id.videoId}`;
    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={src} />
            </div>
            <h3>{selectedVid.snippet.title}</h3>
            <p>{selectedVid.snippet.publishedAt}</p>
            <div className="segment">
                <div className="">

                </div>
            </div>
        </div>
    );
}

export default VideoDetail;