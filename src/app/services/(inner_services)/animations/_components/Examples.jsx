"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import VideoBlock from "./VideoBlock";
import Products from "../../3d-modeling/_components/Products";

const Examples = () => {
  return (
    <section className="examples">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="title"
        >
          <img src="/images/work/AnimationsIcon.svg" />
          <Link href="#">
            <span>
            READY-MADE <br/>ANIMATIONS
            </span>
          </Link>
        </motion.div>
        <div className="examples__body">
        <Products category="ready-made-animations" />
        </div>
      </div>
    </section>
  );
};

export default Examples;
