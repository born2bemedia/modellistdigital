"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ExploreArrow from "@/icons/ExploreArrow";

const ProjectsSlider = ({ images, exploreLink }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="sliderImage"
            />
          </div>
        ))}
      </Slider>
      <Link className="explore" href={exploreLink}>
        Explore more
        <ExploreArrow />
      </Link>
    </div>
  );
};

export default ProjectsSlider;
