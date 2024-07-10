'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const UxUiDesign = () => {
  const imagesArray = [
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="/services/ux-ui-design"/>
  )
}

export default UxUiDesign