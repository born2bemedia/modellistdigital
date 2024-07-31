"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const PricingBlock = () => {
  return (
    <section className="pricing-block">
      <div className="_container">
        <div className="pricing-block__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            UNDERSTANDING UI/UX DESIGN PRICING
          </motion.h2>

          <div className="pricing-row">
            <motion.div
              className="left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div>
                <span>Basic UI design:</span>
                <h3>€900 - €1,500</h3>
                <span>
                  Simple interface designs for small projects or prototypes.
                </span>
              </div>
              <div>
                <span>Standard UI/UX design</span>
                <h3>€1,500 - €3,000</h3>
                <span>
                  Comprehensive designs for medium-sized projects, including
                  wireframes and user flows.
                </span>
              </div>
              <div>
                <span>Advanced UI/UX design</span>
                <h3>€3,000 - €10,000</h3>
                <span>
                  High-detail designs for large-scale projects with advanced
                  interactivity and user experience considerations.
                </span>
              </div>
            </motion.div>
            <motion.div
              className="right"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <ul>
                <li>Information architecture design</li>
                <li>Wireframing and prototyping</li>
                <li>User experience design</li>
                <li>User interface design</li>
                <li>Interaction design</li>
                <li>Responsive design</li>
                <li>Accessibility design</li>
              </ul>
              <Link href="/pricelist/price_list.pdf" target="_blank" className="white-button pricelist">
                See full price list
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBlock;
