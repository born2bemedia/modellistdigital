"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const Customization = () => {
  return (
    <section className="customization">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          ANIMATIONS CUSTOMISATION AND ADD-ONS
        </motion.h2>
        <div className="customization__body ">
          <div className="animations-customization">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>01</span>
              <h3>Enhanced character details</h3>
              <p>
                Adds more detailed expressions and movements to characters for
                higher realism.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>02</span>
              <h3>Professionalvoiceover integration</h3>
              <p>
                Professional voiceover to narrate the animation, enhancing the
                story and engagement.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>03</span>
              <h3>Sound effects and music</h3>
              <p>
                Adds background music and sound effects to make the animation
                more immersive.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>04</span>
              <h3>
                Subtitles <br />
                and captions
              </h3>
              <p>
                Provides accessibility through subtitles and captions in
                multiple languages if needed.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>05</span>
              <h3>
                Advanced <br />
                3D effects
              </h3>
              <p>
                Adds depth and realism to animations with 3D effects and
                elements.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>06</span>
              <h3>Custom backgrounds and scenes</h3>
              <p>
                Unique and detailed backgrounds tailored to fit the animation's
                theme and story.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
