"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ExploreArrow from "@/icons/ExploreArrow";
import { usePopup } from "@/context/PopupsContext";
import { Suspense } from "react";
import Video from "next-video";
import ReactPlayer from "react-player";

const AnimationBlock = ({
  videoUrl,
  videoDescription,
  videoCover,
  text,
  category,
  buttonText,
}) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    setVideo(videoUrl);
  }, [videoUrl]);

  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = () => {
    console.log("popup");
    setServiceValue(category);
    setOrderPopupDisplay(true);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="video"
    >
      <div className="video-top">
        {video ? (
          <Suspense fallback={<p>Loading video...</p>}>
            <ReactPlayer
              url={video}
              width="540px"
              height="305px"
              //light={videoCover}
              //playIcon={<img width={50} height={50} src="/images/playIcon.svg" />}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              className="single-video"
            />
          </Suspense>
        ) : (
          videoCover && (
            <img src={videoCover} className="cover" alt="Video cover" />
          )
        )}
        <button onClick={() => orderPopupOpen()}>
          {buttonText}
          <ExploreArrow />
        </button>
      </div>
      <h4>{videoDescription}</h4>
      {text && <p>{text}</p>}
    </motion.div>
  );
};

export default AnimationBlock;
