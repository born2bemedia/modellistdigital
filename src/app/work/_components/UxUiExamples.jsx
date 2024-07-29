"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";

const UxUiExamples = () => {
  return (
    <section className="video-examples">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/UiUxIcon.svg" />
            <Link href="/services/ux-ui-design">
              <span>
                UX/UI
                <br />
                DESIGN
              </span>
              <img src="/images/work/arrow.svg" />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="description"
          >
            Discover the impact of our UX/UI design services, where user
            experience meets stunning visual design. Browse our portfolio to see
            how we create intuitive, engaging interfaces that bring your ideas
            to life and enhance user satisfaction.
          </motion.div>

          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Design description"}
            category={"UX/UI Design"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Design description"}
            category={"UX/UI Design"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Design description"}
            category={"UX/UI Design"}
            buttonText={"Order a similar solution"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Design description"}
            category={"UX/UI Design"}
            buttonText={"Order a similar solution"}
          />
        </div>
      </div>
    </section>
  );
};

export default UxUiExamples;
