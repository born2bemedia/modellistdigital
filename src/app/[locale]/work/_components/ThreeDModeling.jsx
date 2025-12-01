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
            <Link href="/services/3d-modeling">
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
            videoCover={"/images/home/3d/3d_1.webp"}
            videoDescription={"Golden Flower Elegance"}
            category={"3D Modeling"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_2.webp"}
            videoDescription={"Elegant Ring with a Stunning Gemstone"}
            category={"3D Modeling"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_3.webp"}
            videoDescription={"Elegant 4-Candle Holder for Ambient Lighting"}
            category={"3D Modeling"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_4.webp"}
            videoDescription={"Perfectly Hold Your Eggs with Style"}
            category={"3D Modeling"}
            buttonText={"Order a similar solution"}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeDModeling;
