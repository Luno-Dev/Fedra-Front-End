import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=Z7j3_G7Wbik'; // Reemplaza 'VIDEO_ID' con el ID o la URL del video de YouTube que deseas mostrar

    return (
        <div>
            <ReactPlayer url={videoUrl} controls />
        </div>
    );
};

export default VideoPlayer;

