"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const VideoProduction = () => {
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
              <img src="/images/work/videoProductionIcon.svg" />
              <Link href="#">
                <span>
                  VIDEO
                  <br />
                  PRODUCTION
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Capture your audience's attention and boost engagement with
              expertly crafted videos. Our services are designed to help you
              build a solid personal brand or showcase your unique expertise
              effectively, addressing the need for impactful visual content that
              connects with your audience.
            </motion.p>
          </div>
          <img src="/images/services/videoProductionCover.webp" />
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
            <p><b>Event videography:</b> Professional coverage of weddings, parties, and corporate events.</p>
            <p><b>Family and portrait videos:</b> Customised portraits and family moments captured professionally.</p>
            <p><b>Travel and adventure videos:</b> Documenting global travels and outdoor experiences.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <p><b>Lifestyle videos:</b> Showcasing daily routines, hobbies, and interests.</p>
            <p><b>Personal branding videos:</b> Crafting impactful videos to enhance personal or professional brand presence.</p>
            <p><b>And many more…</b></p>
          </motion.div>
        </div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="button-wrap"
          >
            <Link className="black-button" href="/services/video-production">Learn more</Link>
          </motion.div>

      </div>
    </section>
  );
};

export default VideoProduction;
