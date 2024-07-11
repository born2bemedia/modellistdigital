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
          VIDEO CUSTOMISATION AND ADD-ONS
        </motion.h2>
        <div className="customization__body ">
          <div className="video-customization">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>01</span>
              <h3>Script writing</h3>
              <p>
                Get a compelling narrative and structure for your video,
                ensuring clear and engaging message communication.
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
              <h3>Storyboarding</h3>
              <p>
                Professional visualisation of the video scene by scene,
                providing a blueprint that guides the production process and
                aligns with your vision.
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
              <h3>Voiceover</h3>
              <p>
                Get a professional narration to your video, enhancing the
                storytelling and making the content more engaging and relatable.
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
              <h3>Sound Effects</h3>
              <p>
                Addition of custom audio elements, enriching the video with
                appropriate music and sound effects to enhance the viewer's
                experience.
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
              <h3>Advanced Effects</h3>
              <p>
                Get high-quality animations and visual effects, making your
                video more visually appealing and dynamic.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
