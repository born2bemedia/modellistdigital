"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";

const AnimationsExamples = () => {
  return (
    <section className="video-examples animations">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/AnimationsIcon.svg" />
            <Link href="/services/animations">
              <span>ANIMATIONS</span>
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
            Experience the magic of our animation services, where imagination
            meets motion. Explore our portfolio to see how we bring ideas to
            life with dynamic and captivating animations that engage and inspire
            your audience.
          </motion.div>

          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Animated circle preloader"}
            text={
              "Experience a dynamic Neon preloader featuring two rotating circles, each moving in opposite directions. Watch as the inner circle morphs shapes while the vibrant colours shift with every rotation."
            }
            category={"Animations"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Animated text"}
            text={
              "Enjoy the elegant animation of text gracefully appearing letter by letter on the screen, ensuring readability at a comfortable pace for adults to absorb each word with clarity."
            }
            category={"Animations"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Animated button"}
            text={
              "Discover an animated hover button adorned with a gradient from violet to pink. Upon hovering, witness its transformation to a serene lagoon blue, adding interactive charm and elegance to your interface."
            }
            category={"Animations"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Animated ball preloader"}
            text={
              "Behold a captivating preloader featuring a lively red ball bouncing energetically against a subdued grey backdrop. Its rhythmic motion signals ongoing activity."
            }
            category={"Animations"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Animated neon heart"}
            text={
              "Watch a neon pink heart sketch elegantly form on the screen. It begins to pulsate with a gentle rhythm and sends vibrant waves of neon colours, filling the screen with affection and energy."
            }
            category={"Animations"}
          />
        </div>
      </div>
    </section>
  );
};

export default AnimationsExamples;
