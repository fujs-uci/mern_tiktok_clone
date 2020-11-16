import React, { useRef, useState } from 'react';
import "./video.css";
import VideoFooter from "./VideoFooter.js";
import VideoSidebar from "./VideoSidebar.js";

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [ playing, setPlaying ] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // if video is playing, stop
        // if video is paused, play
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play()
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            {/* Video */}
            <video 
            onClick={ handleVideoPress }
                className="video__player"
                loop
                ref={ videoRef }
                src={ url }/>

            {/* VideoFooter */}
            <VideoFooter 
                channel={ channel } 
                description={ description } 
                song={ song }/>

            {/* VideoSidebar */}
            <VideoSidebar 
                likes={ likes } 
                messages={ messages } 
                shares={ shares }/>
        </div>
    )
}

export default Video
