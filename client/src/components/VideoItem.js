import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSelectedVideo} from '../actions';
import {Link} from 'react-router-dom';

import '../styles/VideoItem.css';

class VideoItem extends Component {

    onVideoClick = () => {
        this.props.setSelectedVideo(this.props.vid)
    }

    render() {
        return (
            <div className="item">
                <div className="video_item">
                    <Link to="/detail" onClick={this.onVideoClick}>
                        <div className="item">
                            <img src={this.props.vid.snippet.thumbnails.medium.url} />
                            <div className="video_content">
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {selectedVideo: state.selectedVideo};
}

export default connect(mapStateToProps, {setSelectedVideo})(VideoItem);