'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const UxUiDesign = () => {
  const imagesArray = [
    '/images/work/ux1.png',
    '/images/work/ux2.png',
    '/images/work/ux3.png',
    '/images/work/ux4.png',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="/services/ux-ui-design"/>
  )
}

export default UxUiDesign