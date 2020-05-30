import React from 'react';

const VideoDetail = ({selectedVid}) => {
    if (!selectedVid) {
        return <div>No video yet</div>
    }

    const src = `https://www.youtube.com/embed/${selectedVid.id.videoId}`;
    return (
        <div >
            <iframe src={src} />
        </div>
    );
}

export default VideoDetail;