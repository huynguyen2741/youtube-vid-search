import React, {Component} from 'react';
import './VideoItem.css';

import {connect} from 'react-redux';
import {setSelectedVideo} from '../actions';
import {Link} from 'react-router-dom';

class VideoItem extends Component {

    onVideoClick = () => {
        this.props.setSelectedVideo(this.props.vid)
    }

    render() {
        return (
            <div className="video-item">
                <Link to="/detail" onClick={this.onVideoClick}>
                    <div className="video-item item">
                        <img className="ui image" src={this.props.vid.snippet.thumbnails.medium.url} />
                        <div className="content">
                            <div className="header">
                                {this.props.vid.snippet.title}
                            </div>
                            <div className="description">
                                {this.props.vid.snippet.channelTitle}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {selectedVideo: state.selectedVideo};
}

export default connect(mapStateToProps, {setSelectedVideo})(VideoItem);