'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const Animations = () => {
  const videoArray = [
    {
      video: "/videos/heart_anim.mp4",
    },
    {
      video: "/videos/circle_anim.mp4",
    },
    {
      video: "/videos/button_anim.mp4",
    },
    {
      video: "/videos/text_anim.mp4",
    },
  ];

  return (
    <ProjectsSlider videos={videoArray} animation={true} exploreLink="/services/animations"/>
  )
}

export default Animations