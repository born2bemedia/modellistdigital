"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const InnerServicesHome = () => {
  return (
    <section className="services-hero">
      <div className="_container">
        <div className="services-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/services/video/videoHero.webp"
            width={536}
            height={536}
          ></motion.img>
          <div>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              src="/images/services/video/videoHeroIcon.svg"
              width={48}
              height={48}
            ></motion.img>
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
              Video <br />production:
            </motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            from concepts to visuals
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesHome;
