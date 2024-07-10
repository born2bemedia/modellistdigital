"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const Animations = () => {
  return (
    <section className="service-block">
      <div className="_container">
        <div className="service-block__top">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="title"
            >
              <img src="/images/work/UiUxIcon.svg" />
              <Link href="#">
                <span>ANIMATIONS</span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Transform your ideas into captivating visual stories with our
              animation services. Perfect for bloggers, influencers, and
              personal brands, our animations help you effectively express your
              creativity, engage your audience, and elevate your online
              presence.
            </motion.p>
          </div>
          <img src="/images/services/serviceThumbnail.svg" />
        </div>

        <div className="service-block__bottom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h3>We craft</h3>
            <p>
              <b>Character Animation:</b> Fictional characters in motion to
              engage audiences and convey stories effectively.
            </p>
            <p>
              <b>Motion Graphics:</b> Graphical elements in motion to enhance
              visual communication and captivate viewers.
            </p>
            <p>
              <b>Interactive 3D Animations:</b> Simulations that present virtual
              environments in motion to provide immersive and engaging
              interactive experiences.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <p>
              <b>Product Animation:</b> Products in motion to showcase features,
              functionality, and benefits effectively.
            </p>
            <p>
              <b>Explainer Animation:</b> Complex ideas or processes in motion
              to simplify understanding and engage viewers effectively.
            </p>
            <p>
              <b>And many more…</b>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link className="black-button" href="#">
            Learn more
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Animations;
