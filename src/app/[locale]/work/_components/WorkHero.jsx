"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const WorkHero = () => {
  

  return (
    <section className="work-hero">
      <div className="_container">
        <div className="work-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/work/workHero.webp"
            width={560}
            height={560}
          ></motion.img>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
          Experience the magic of ideas in motion
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
          In user interfaces, videos, 3D models and animations.
          </motion.h2>
          
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="work-hero__bottom"
        >
          <Link href="/services">
            <span>Find a service</span>
            <span>
              <img src="/images/home/whiteArrow.svg" />
            </span>
          </Link>
          <Link href="/get-a-quote">
            <span>Submit your idea</span>
            <span>
              <img src="/images/home/whiteArrow.svg" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHero;
