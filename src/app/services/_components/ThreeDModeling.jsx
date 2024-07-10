"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const ThreeDModeling = () => {
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
              <img src="/images/work/3dModelingIcon.svg" />
              <Link href="#">
                <span>
                  3D
                  <br />
                  MODELLING
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Enhance your projects with high-quality 3D modelling services
              designed to solve your specific needs. Our services help you
              visualise and bring your ideas to life, providing a powerful tool
              for personal projects and presentations.
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
              <b>Architectural modelling:</b> Creating detailed 3D models for
              personal architectural design and visualisation.
            </p>
            <p>
              <b>Character modelling:</b> Designing intricate 3D characters for
              animation and game development.
            </p>
            <p>
              <b>Product modelling:</b> Crafting realistic 3D product models for
              marketing and presentations.
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
              <b>Organic modelling:</b> Generating lifelike 3D models of plants
              and animals for educational and creative use.
            </p>
            <p>
              <b>Vehicle modelling:</b> Producing precise 3D models of vehicles
              for simulation and design projects.
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

export default ThreeDModeling;
