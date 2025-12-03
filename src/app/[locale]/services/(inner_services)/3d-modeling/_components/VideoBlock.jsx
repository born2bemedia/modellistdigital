"use client";

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoBlock = ({ videoUrl, videoCover }) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    setVideo(videoUrl);
  }, [videoUrl]);

  return (
    <>
      {video && (
        <ReactPlayer
          url={video}
          width={340}
          height={197}
          muted={true}
          loop={true}
          controls={false}
          playing={true}
          className="single-video"
        />
      )}
    </>
  );
};

export default VideoBlock;
