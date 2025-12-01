"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";

const VideoProductionExamples = () => {
  return (
    <section className="video-examples">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/videoProductionIcon.svg" />
            <Link href="/services/video-production">
              <span>
                VIDEO
                <br />
                PRODUCTION
              </span>
              <img src="/images/work/arrow.svg" />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="description"
          >
            Discover how our expertly crafted videos skyrocket your ideas,
            transforming concepts into captivating visuals that engage and
            inspire. Explore our portfolio to see the impact of high-quality
            production on your personal brand.
          </motion.div>

          <VideoBlock
            videoUrl={"/videos/corrective-nutrition.webm"}
            videoCover={"/images/work/video1_cover.png"}
            category={"Video Production"}
            buttonText={"Order a similar video"}
          />
          <VideoBlock
            videoUrl={"/videos/successful_career.webm"}
            videoCover={"/images/work/video2_cover.png"}
            category={"Video Production"}
            buttonText={"Order a similar video"}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoProductionExamples;
