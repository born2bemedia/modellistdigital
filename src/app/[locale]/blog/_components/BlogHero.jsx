"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const BlogHero = () => {
  const t = useTranslations('blog.hero');

  return (
    <section className="blog-hero">
      <div className="_container">
        <div className="blog-hero__body">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', {fallback: 'The Modellist Digital blog'})}
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('description', {fallback: 'Insights, tips, and trends in digital production.'})}
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
