"use client";
import React from "react";
import ProjectsSlider from "./ProjectsSlider";

const VideoProduction = () => {
  const videoArray = [
    "/videos/corrective-nutrition.webm",
    "/videos/corrective-nutrition.webm",
  ];

  return (
    <ProjectsSlider
      videos={videoArray}
      exploreLink="/services/video-production"
    />
  );
};

export default VideoProduction;
