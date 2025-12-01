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
            UNDERSTANDING OUR PRODUCTION PRICING
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
                  <span>Short Video Package (up to 2 minutes)</span>
                  <h3>€500 - €1,000</h3>
                </div>
              </div>
              <div>
                <div>
                  <span>Medium Video Package (2-5 minutes)</span>
                  <h3>€1,000 - €2,500</h3>
                </div>
              </div>
              <div>
                <div>
                  <span>Long Video Package (5-10 minutes)</span>
                  <h3>€2,500 - €5,000</h3>
                </div>
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
                <li>Event videography</li>
                <li>Family and portrait videos</li>
                <li>Travel and adventure videos</li>
                <li>Lifestyle videos</li>
                <li>Personal branding videos</li>
                <li>Tribute and memorial videos</li>
                <li>Educational and how-to videos</li>
                <li>Vlogs and personal documentaries</li>
                <li>Product demonstrations</li>
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
