"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import VideoBlock from "./VideoBlock";

const Examples = () => {
  return (
    <section className="examples">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="title"
        >
          <img src="/images/work/videoProductionIcon.svg" />
          <Link href="#">
            <span>
              READY-MADE
              <br />
              VIDEOS
            </span>
          </Link>
        </motion.div>
        <div className="examples__body">
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Video description"}
            price={"€450"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Video description"}
            price={"€450"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Video description"}
            price={"€450"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Video description"}
            price={"€450"}
          />
        </div>
      </div>
    </section>
  );
};

export default Examples;