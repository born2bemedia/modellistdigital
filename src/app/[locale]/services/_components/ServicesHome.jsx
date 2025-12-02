"use client";
import React from 'react';
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useTranslations } from 'next-intl';

const ServicesHome = () => {
  const t = useTranslations('services.home');

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
            {t('title.0', {fallback: 'Digital'})} <br/>{t('title.1', {fallback: 'production'})} <br/>{t('title.2', {fallback: 'services'})}
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
          {t('description.0', {fallback: 'Powerful digital products'})} <br/>{t('description.1', {fallback: 'for a standout presence.'})} <br/>{t('description.2', {fallback: 'Crafted with precision.'})}
          </motion.h2>
        </div>
      </div>
    </section>
  )
}

export default ServicesHome