import React from 'react';
import YouTube from 'react-youtube';

function VideoYoutube() {
    const videoId = '1v4Py382lPw';

    const playerStyles = {

    };
    return (
        <div style={playerStyles}>
            <YouTube videoId={videoId} />
        </div>



    );
}

export default VideoYoutube;
