import React from 'react';
import YouTube from 'react-youtube';

function VideoYoutube() {
    const videoId = '1v4Py382lPw';

    return (
        <YouTube videoId={videoId} />
    );
}

export default VideoYoutube;
