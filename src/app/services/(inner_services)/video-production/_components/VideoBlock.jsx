"use client";
import { Suspense, useEffect, useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Video from "next-video";
import ReactPlayer from "react-player";

const VideoBlock = ({ videoUrl, videoDescription, videoCover, price }) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    setVideo(videoUrl);
  }, []);

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
              light={videoCover}
              playIcon={<img width={50} height={50} src="/images/playIcon.svg" />}
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
      </div>
      <h4>{videoDescription}</h4>
      <span className="price">PRICE {price}</span>
    </motion.div>
  );
};

export default VideoBlock;
