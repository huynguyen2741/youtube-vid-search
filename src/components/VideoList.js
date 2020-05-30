import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({vids,selectVideo}) => {
    console.log(vids);
    if (vids.length <= 0) {
        return (<p>Loading</p>);
    }

    const vid_list = vids.map(vid => {
        return <VideoItem vid={vid} selectVideo={selectVideo} />;
    });

    return (
        <div className="ui selection list">
            {vid_list}
        </div>);
}

export default VideoList;