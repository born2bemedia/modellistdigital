"use client";
import { Suspense } from "react";
import React from "react";
import Video from "next-video";

const VideoBlock = ({ videoUrl }) => {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <Video src={videoUrl} accentColor="#B4FF05" />
    </Suspense>
  );
};

export default VideoBlock;
