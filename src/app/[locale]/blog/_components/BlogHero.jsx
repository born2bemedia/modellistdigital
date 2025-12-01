"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const BlogHero = () => {
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
            The Modellist Digital blog
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Insights, tips, and trends in digital production.
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
