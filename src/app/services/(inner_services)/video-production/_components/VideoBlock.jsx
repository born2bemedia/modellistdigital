"use client";
import { Suspense } from "react";
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
        {videoUrl ? (
          <Suspense fallback={<p>Loading video...</p>}>
            <video controls autoPlay muted>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Suspense>
        ) : (
          videoCover && (
            <img src={videoCover} className="cover" alt="Video cover" />
          )
        )}
      </div>
      <h4>{videoDescription}</h4>
      <span className="price">PRICE {price}</span>
    </motion.div>
  );
};

export default VideoBlock;
