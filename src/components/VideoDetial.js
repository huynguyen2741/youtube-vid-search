import React from 'react';
import Faker from 'faker';

import './VideoDetail.css';

import Comment from './Comment';

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

    const publishDate = date => {
        let dateString = selectedVid.snippet.publishedAt;
        const indexOfT = dateString.indexOf('T');
        dateString = dateString.substring(0,indexOfT);
        const year = dateString.substring(0,4);
        dateString = dateString.substring(year.length + 1);
        const month = dateString.substring(0,2);
        const day = dateString.substring(month.length + 1);
        dateString = new Date();
        return `${month} - ${day} - ${year}`;
    }

    return (
        <div className="video-detail">
            <div className="ui segments">
                <div className="ui segment">
                    <div className="ui embed">
                        <iframe src={src} />
                    </div>
                </div>
                <div className="ui segment">
                    <h3>{selectedVid.snippet.title}</h3>
                    <p>Published at: {publishDate(selectedVid.snippet.publishedAt)}</p>
                </div>
                <div className="ui segment">
                    <div className="ui relaxed list">
                        <Comment
                            avatar={Faker.image.avatar()}
                            content="Greate vids" />
                        <Comment
                            avatar={Faker.image.avatar()}
                            content="Awesome content" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoDetail;