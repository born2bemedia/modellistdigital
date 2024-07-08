'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const Animations = () => {
  const imagesArray = [
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
    '/images/home/videoProduction/slide1.png',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="#"/>
  )
}

export default Animations