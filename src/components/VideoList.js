import React, {Component} from 'react';
import {connect} from 'react-redux';

import VideoItem from './VideoItem';

// const VideoList = ({vids, selectVideo}) => {
//     // console.log(vids);
//     if (vids.length <= 0) {
//         return (<p>Please enter some search input in the search bar</p>);
//     }

//     const vid_list = vids.map(vid => {
//         return <VideoItem vid={vid} selectVideo={selectVideo} />;
//     });

//     return (
//         <div className="ui selection list">
//             {vid_list}
//         </div>);
// }

class VideoList extends Component {

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