import React from "react";

const VideoContainer = ({ videoId }) => {
  return (
    <div className="relative w-full  h-[500px] overflow-hidden rounded-xl shadow-lg border border-gray-200">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
        title="YouTube Video"
       
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default VideoContainer;
