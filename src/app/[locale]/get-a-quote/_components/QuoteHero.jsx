"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const QuoteHero = () => {
  const t = useTranslations('getAQuote.hero');

  return (
    <section className="quote-hero">
      <div className="_container">
        <div className="quote-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/quote/quoteHero.webp"
            width={475}
            height={515}
          ></motion.img>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            {t('title', {fallback: 'Get a quote'})}
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            {t('description.0', {fallback: "We're here to help you find the perfect solution."})} <br />
            {t('description.1', {fallback: "Fill out the form below, and we'll provide a tailored"})} <br />
            {t('description.2', {fallback: "estimate for our services."})}
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="quote-hero__bottom"
        >
          <Link href="#">
            {t('text', {fallback: "Before filling out the form, download and take a look at our pricing guide to understand the range of services we offer and their associated costs."})}
          </Link>
          <Link href="/pricelist/price_list.pdf" target="_blank" className="pricelist">
            <span>
              {t('button.0', {fallback: 'Download'})} <br />
              {t('button.1', {fallback: 'pricing guide'})}
            </span>
            <span>
              <img src="/images/quote/downloadIcon.svg" alt="whiteArrow" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteHero;
