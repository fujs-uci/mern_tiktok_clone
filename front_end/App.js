import React, { useState, useEffect } from 'react';
import './app.css';
import Video from "./Video.js";
import axios from "./axios.js";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  return (
    <div className="app">
      <h1>TikTok Clone</h1>

      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={Number(likes)}
              messages={Number(messages)}
              shares={Number(shares)}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
