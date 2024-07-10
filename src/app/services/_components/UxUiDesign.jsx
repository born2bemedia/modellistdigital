"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const UxUiDesign = () => {
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
                <span>
                  UX/UI
                  <br />
                  DESIGN
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Struggling with high bounce rates or low user engagement? Our
              UX/UI design services solve these problems by transforming your
              website or app into an intuitive, visually appealing platform that
              keeps users engaged.
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
              <b>Wireframing and prototyping:</b> "Detailed digital layouts and
              interactive prototypes that clarify user experience strategies.
            </p>
            <p>
              <b>User Interface design:</b> A user-friendly interface with
              cohesive branding, ensuring intuitive navigation and visual
              appeal.
            </p>
            <p>
              <b>Branding and identity design:</b> A unified visual identity
              package, including logos and design elements that strengthen brand
              recognition.
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
              <b>User flow optimization:</b> Optimised navigation structures that enhance usability and streamline the user journey.
            </p>
            <p>
              <b>Persona Development:</b> Detailed user profiles based on research, guiding design decisions to align with user expectations and behaviours.
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

export default UxUiDesign;
