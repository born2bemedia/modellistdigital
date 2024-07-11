'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const Modelling = () => {
  const imagesArray = [
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="/services/3d-modeling"/>
  )
}

export default Modelling