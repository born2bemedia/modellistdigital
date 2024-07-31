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
            UNDERSTANDING OUR 3D MODELLING COSTS
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
                <span>Basic 3D Model</span>
                <h3>€200 - €500</h3>
                <span>Simple objects or low-detail models.</span>
              </div>
              <div>
                <span>Intermediate 3D Model</span>
                <h3>€500 - €1,000</h3>
                <span>More complex objects with moderate detail.</span>
              </div>
              <div>
                <span>Advanced 3D Model</span>
                <h3>€1,000 - €3,000</h3>
                <span>High-detail models, characters, or architectural designs.</span>
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
                <li>Custom 3D model</li>
                <li>Product modelling</li>
                <li>Character modelling</li>
                <li>Organic modelling (plants, animals, etc.)</li>
                <li>Vehicle modelling</li>
                <li>Prototype modelling</li>
                <li>Medical modelling</li>
                <li>Industrial design modelling</li>
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
