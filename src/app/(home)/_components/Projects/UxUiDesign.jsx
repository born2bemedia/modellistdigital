'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const UxUiDesign = () => {
  const imagesArray = [
    '/images/home/videoProduction/slide1.webp',
    '/images/home/videoProduction/slide1.webp',
    '/images/home/videoProduction/slide1.webp',
    '/images/home/videoProduction/slide1.webp',
    '/images/home/videoProduction/slide1.webp',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="/services/ux-ui-design"/>
  )
}

export default UxUiDesign