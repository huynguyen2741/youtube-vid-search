import React, {Component} from 'react';
import {connect} from 'react-redux';

import VideoItem from './VideoItem';

class VideoList extends Component {

    // render each vid into <VideoItem>
    vids = () => {
        const list = this.props.videoList;
        // console.log(this.props.videoList);
        if (list.length <= 0) {
            return (<p>Please enter some search input in the search bar</p>);
        }

        return list.map(vid => {
            // console.log(vid);
            return <VideoItem vid={vid} />;
        })
    };

    render() {
        return (
            <div className="ui selection list" >
                {this.vids()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        videoList: state.videoList
    }
}

export default connect(mapStateToProps)(VideoList);