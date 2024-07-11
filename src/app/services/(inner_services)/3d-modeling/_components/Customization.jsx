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
          3D MODELLING CUSTOMISATION AND ADD-ONS
        </motion.h2>
        <div className="customization__body ">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>01</span>
              <h3>Texturing and materials</h3>
              <p>
                Enhancing realism and visual appeal by adding detailed textures
                and lifelike materials to your 3D models.
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
              <h3>Rigging and animation</h3>
              <p>
                Adding movement and functionality to your models, making them
                ready for animation and interactive applications.
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
              <h3>Complex geometry</h3>
              <p>
                Providing intricate designs and shapes, allowing for detailed
                and sophisticated 3D models.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
