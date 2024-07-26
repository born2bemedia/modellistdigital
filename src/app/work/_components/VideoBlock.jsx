"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ExploreArrow from "@/icons/ExploreArrow";
import { usePopup } from "@/context/PopupsContext";
import { Suspense } from "react";
import Video from "next-video";
import ReactPlayer from "react-player";

const VideoBlock = ({
  videoUrl,
  videoDescription,
  videoCover,
  text,
  category,
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
              light="/images/work/cover.png"
              playing="true"
              controls
              className="single-video"
            />
          </Suspense>
        ) : (
          videoCover && (
            <img src={videoCover} className="cover" alt="Video cover" />
          )
        )}
        <button onClick={() => orderPopupOpen()}>
          Order a similar video
          <ExploreArrow />
        </button>
      </div>
      <h4>{videoDescription}</h4>
      {text && <p>{text}</p>}
    </motion.div>
  );
};

export default VideoBlock;
