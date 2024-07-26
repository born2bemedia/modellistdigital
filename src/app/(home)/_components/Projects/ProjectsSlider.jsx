"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ExploreArrow from "@/icons/ExploreArrow";
import ReactPlayer from "react-player";

const ProjectsSlider = ({ images = [], videos = [], exploreLink }) => {
  const [videoArray, setVideoArray] = useState([]);

  useEffect(() => {
    if (videos && Array.isArray(videos)) {
      setVideoArray(videos);
    }
  }, [videos]);

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
        {images.length > 0 &&
          images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="sliderImage"
              />
            </div>
          ))}
        {videoArray.length > 0 &&
          videoArray.map((video, index) => (
            <div key={index}>
              <ReactPlayer
                url={video}
                light="/images/work/cover.png"
                playing
                controls
                className="single-video"
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
