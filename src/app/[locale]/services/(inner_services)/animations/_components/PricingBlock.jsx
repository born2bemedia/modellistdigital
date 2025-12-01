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
            UNDERSTANDING ANIMATION PRODUCTION PRICING
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
                <div>
                  <span>Basic Animation</span>
                  <h3>€500 - €1,500</h3>
                </div>
                <span>
                  Simple animations such as basic motion graphics or short
                  animated clips.
                </span>
              </div>
              <div>
                <div>
                  <span>Standard Animation</span>
                  <h3>€1500 - €5,000</h3>
                </div>
                <span>
                  More complex animations including character animations and
                  detailed motion graphics.
                </span>
              </div>
              <div>
                <div>
                  <span>Advanced Animation</span>
                  <h3>€5,000 - €15,000</h3>
                </div>
                <span>
                  High-detail animations with intricate designs, interactive
                  elements, and longer durations.
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
                <li>Character animation</li>
                <li>Product animation</li>
                <li>Motion graphics</li>
                <li>Architectural visualisation</li>
                <li>Interactive 3D animations</li>
              </ul>
              <Link
                href="/pricelist/price_list.pdf"
                target="_blank"
                className="white-button pricelist"
              >
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
