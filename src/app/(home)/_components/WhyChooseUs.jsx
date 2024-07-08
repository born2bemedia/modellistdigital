"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="_container">
        <div className="why-choose__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              WHY <br />
              CHOOSE <br />
              US
            </motion.h2>

            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>01</span>
                  <span>Extensive expertise</span>
                </h3>
                <p>
                  Our team has a wealth of knowledge and experience in various
                  digital fields, ensuring we deliver innovative and effective
                  video production services.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>02</span>
                  <span>Top talents</span>
                </h3>
                <p>
                  We have assembled a team of highly skilled professionals who
                  are passionate about creating outstanding video content that
                  stands out.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>03</span>
                  <span>Comprehensive approach</span>
                </h3>
                <p>
                  From consulting and strategy to production and distribution,
                  we handle every aspect of the process to ensure a seamless and
                  successful project.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>04</span>
                  <span>Guaranteed quality</span>
                </h3>
                <p>
                  We promise that our products will match top industry
                  standards, providing you with high-quality content that you
                  can be proud of.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>05</span>
                  <span>Market research</span>
                </h3>
                <p>
                  We thoroughly research the market and understand your
                  audience's needs to craft a product that not only looks great
                  but also effectively boosts your brand.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>06</span>
                  <span>Product Consistency</span>
                </h3>
                <p>
                  We keep all your data, style elements, and identity on file to
                  ensure consistency across all your products. No matter when
                  you order your next one, it will be perfectly aligned with
                  your brand.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="#" className="white-button">
                  Meet our team
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="col-02">
            <div>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/gallery.svg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
