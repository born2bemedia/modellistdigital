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
          <div className="row">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                <b>Office address:</b> 2 Eastbourne Terrace, London W2 6LG,
                United Kingdom
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.759382442244!2d-0.18285252349645048!3d51.517630271815655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aac5f6576cf%3A0x3ea4a05acd3d2f1e!2s2%20Eastbourne%20Terrace%2C%20London%20W2%206LG%2C%20UK!5e0!3m2!1sen!2sua!4v1722955182639!5m2!1sen!2sua"
                width="600"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                <b>Registered address:</b> 167 - 169 Great Portland Street, 5th
                Floor, London, W1W 5PF, United Kingdom
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5384392360097!2d-0.14625432349618747!3d51.521683371816636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3a9cd87457%3A0x9734f33aa59affda!2sThe%20London%20Office!5e0!3m2!1sen!2sua!4v1722955325059!5m2!1sen!2sua"
                width="600"
                height="400"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
