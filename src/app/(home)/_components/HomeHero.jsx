"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const HomeHero = () => {
  const marqueeTexts = [
    "Expert video production",
    "Animations",
    "3D modelling",
    "UI/UX design",
    "Expert video production",
    "Animations",
    "3D modelling",
    "UI/UX design",
  ];

  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/home/homeHero.webp"
            width={535}
            height={535}
            alt="homeHero"
          ></motion.img>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            Professional production company
          </motion.h2>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Make your idea <br />
            stand out
          </motion.h1>
          <Marquee texts={marqueeTexts} />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="home-hero__bottom"
        >
          <Link href="/team">
            <span>Meet our team</span>
            <span>
              <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
            </span>
          </Link>
          <Link href="/get-a-quote">
            <span>Get a quote</span>
            <span>
              <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
