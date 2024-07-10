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
          UI/UX DESIGN CUSTOMISATION AND ADD-ONS
        </motion.h2>
        <div className="customization__body">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="item"
            >
              <span>01</span>
              <h3>
              User flow optimization
              </h3>
              <p>
              Enhances the user journey for better engagement and satisfaction.
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
              <h3>
              Persona development
              </h3>
              <p>
              Identifies key user personas to tailor the design for specific audience needs.
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
              <h3>
              Accessibility optimization
              </h3>
              <p>
              Ensures your design is accessible to all users, including those with disabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
