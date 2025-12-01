"use client";
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ServicesHome = () => {
  return (
    <section className="services-hero">
      <div className="_container">
        <div className="services-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/services/servicesHero.webp"
            width={536}
            height={536}
          ></motion.img>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Digital <br/>production <br/>services
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
          Powerful digital products <br/>for a standout presence.<br/>
          Crafted with precision.
          </motion.h2>
          
        </div>
      </div>
    </section>
  )
}

export default ServicesHome