"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useTranslations } from "next-intl";

const HomeHero = () => {
  const t = useTranslations('home.hero');

  const marqueeTexts = [
    t('marquee.0', {fallback: 'Expert video production'}),
    t('marquee.1', {fallback: 'Animations'}),
    t('marquee.2', {fallback: '3D modelling'}),
    t('marquee.3', {fallback: 'UI/UX design'}),
    t('marquee.4', {fallback: 'Expert video production'}),
    t('marquee.5', {fallback: 'Animations'}),
    t('marquee.6', {fallback: '3D modelling'}),
    t('marquee.7', {fallback: 'UI/UX design'}),
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
            width={412}
            height={515}
            alt="homeHero"
          ></motion.img>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            {t('subtitle', {fallback: 'Professional production company'})}
          </motion.h2>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            {t('title.0', {fallback: 'Make your idea'})}<br />
            {t('title.1', {fallback: 'stand out'})}
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
            <span>{t('text.0', {fallback: 'Meet our team'})}</span>
            <span>
              <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
            </span>
          </Link>
          <Link href="/get-a-quote">
            <span>{t('text.1', {fallback: 'Get a quote'})}</span>
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
