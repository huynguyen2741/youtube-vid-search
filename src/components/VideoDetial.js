import React from 'react';
import Faker from 'faker';

import {connect} from 'react-redux';
import './VideoDetail.css';

import Comment from './Comment';

const VideoDetail = ({selectedVideo}) => {
    // if no selected video => render blank <iframe>
    if (!selectedVideo) {
        return (
            <div className="video-detail">
                <div className="ui embed">
                    <iframe src />
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

const mapStateToProps = state => {
    return {selectedVideo: state.selectedVideo};
}

export default connect(mapStateToProps)(VideoDetail);