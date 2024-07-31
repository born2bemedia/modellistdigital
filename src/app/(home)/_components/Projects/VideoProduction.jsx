"use client";
import React from "react";
import ProjectsSlider from "./ProjectsSlider";

const VideoProduction = () => {
  const videoArray = [
    {
      cover: "/images/work/video1_cover.png",
      video: "/videos/corrective-nutrition.webm",
    },
    {
      cover: "/images/work/video2_cover.png",
      video: "/videos/successful_career.webm",
    },
  ];
  return (
    <ProjectsSlider
      videos={videoArray}
      exploreLink="/services/video-production"
    />
  );
};

export default VideoProduction;
