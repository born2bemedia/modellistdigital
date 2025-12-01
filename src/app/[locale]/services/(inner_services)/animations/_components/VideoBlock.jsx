"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const VideoBlock = ({ videoUrl, videoDescription, videoCover, price }) => {


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
      </div>
      <h4>{videoDescription}</h4>
      <span className="price">PRICE {price}</span>
    </motion.div>
  );
};

export default VideoBlock;
