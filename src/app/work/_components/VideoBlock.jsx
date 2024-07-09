"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import ExploreArrow from "@/icons/ExploreArrow";
import { usePopup } from "@/context/PopupsContext";

const VideoBlock = ({ videoUrl, videoDescription, videoCover, text, category }) => {
  const {
    orderPopupDisplay,
    setOrderPopupDisplay,
    serviceValue,
    setServiceValue,
  } = usePopup();

  const orderPopupOpen = () => {
    console.log('popup');
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
        <img src={videoCover} className="cover" />
        <button onClick={() => orderPopupOpen()}>
          Order a similar video
          <ExploreArrow />
        </button>
      </div>
      <h4>{videoDescription}</h4>
      {text && (<p>{text}</p>)}
    </motion.div>
  );
};

export default VideoBlock;
