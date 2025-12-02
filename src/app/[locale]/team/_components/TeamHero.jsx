"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useTranslations } from "next-intl";

const TeamHero = () => {
  const t = useTranslations('team.hero');

  return (
    <section className="team-hero">
      <div className="_container">
        <div className="team-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/team/teamHero.webp"
            width={950}
            height={560}
          ></motion.img>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            {t('title', {fallback: 'Creative minds behind Modellist Digital'})}
          </motion.h1>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="subtitle"
        >
          {t('description', {fallback: 'At The Modellist, our small but dedicated team works tirelessly to transform your ideas into stunning visuals. Each member is crucial in ensuring creativity, quality, and precision in every aspect of our services. Discover the key roles that make our magic happen:'})}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHero;
