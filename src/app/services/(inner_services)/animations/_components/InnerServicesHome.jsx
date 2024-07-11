"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const InnerServicesHome = () => {
  return (
    <section className="services-hero 3d-hero">
      <div className="_container">
        <div className="services-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/services/animations/animationsHero.webp"
            width={392}
            height={517}
          ></motion.img>
          <div>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              src="/images/services/animations/animationsHeroIcon.svg"
              width={48}
              height={48}
            ></motion.img>
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Professional <br />
            animations:
            </motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            crafting dynamic visuals
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesHome;
