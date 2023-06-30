import React from 'react';
import YouTube from 'react-youtube';

function VideoYoutube() {
    const videoId = '1v4Py382lPw';

    return (
        <div>
            <YouTube className='w-100' videoId={videoId} />
        </div>



    );
}

export default VideoYoutube;
