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
            src="/images/services/3d/3dHero.webp"
            width={372}
            height={509}
          ></motion.img>
          <div>
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              src="/images/services/3d/3dHeroIcon.svg"
              width={48}
              height={48}
            ></motion.img>
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
              Professional <br />
              3D modelling:
            </motion.h1>
            <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
              visualising your ideas
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesHome;
