"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";

const ThreeDModeling = () => {
  return (
    <section className="video-examples threeD">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/3dModelingIcon.svg" />
            <Link href="#">
              <span>
                3D
                <br />
                MODELLING
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
            Explore how our 3D modelling services bring your ideas to life with
            stunning precision and detail. Dive into our portfolio to see how we
            transform concepts into dynamic, realistic models that elevate your
            projects and captivate your audience.
          </motion.div>

          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            category={"3D Modeling"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            category={"3D Modeling"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            category={"3D Modeling"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            category={"3D Modeling"}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeDModeling;
