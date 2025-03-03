import { Card } from "@material-tailwind/react";
import React from "react";

const VideoContainer = ({ videoUrl }) => {
  return (
    <Card className="relative w-[60%] h-[500px] overflow-hidden rounded-xl shadow-lg border border-gray-200 mt-10">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
      ></video>
    </Card>
  );
};

export default VideoContainer;
