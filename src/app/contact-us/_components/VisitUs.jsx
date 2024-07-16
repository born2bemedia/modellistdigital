"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const VisitUs = () => {
  return (
    <section className="visit-us">
      <div className="_container">
        <div className="visit-us__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            VISIT US
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            167 - 169 Great Portland Street, 5th Floor, London, England, W1W 5PF
          </motion.p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5384392360097!2d-0.14625432349618747!3d51.521683371816636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3a9cd87457%3A0x9734f33aa59affda!2sThe%20London%20Office!5e0!3m2!1sen!2sua!4v1721145782285!5m2!1sen!2sua"
            width="600"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
