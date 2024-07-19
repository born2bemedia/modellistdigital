'use client';
import React from 'react'
import ProjectsSlider from './ProjectsSlider';

const Modelling = () => {
  const imagesArray = [
    '/images/home/3d/3d_1.webp',
    '/images/home/3d/3d_2.webp',
    '/images/home/3d/3d_3.webp',
    '/images/home/3d/3d_4.webp',
    '/images/home/3d/3d_5.webp',
  ];

  return (
    
    <ProjectsSlider images={imagesArray} exploreLink="/services/3d-modeling"/>
  )
}

export default Modelling