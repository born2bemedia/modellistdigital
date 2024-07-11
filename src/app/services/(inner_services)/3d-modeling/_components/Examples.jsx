"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import VideoBlock from "./VideoBlock";

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
          <img src="/images/work/3dModelingIcon.svg" />
          <Link href="#">
            <span>
              READY-MADE <br />
              3D MODELS
            </span>
          </Link>
        </motion.div>
        <div className="examples__body">
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            price={"€399"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            price={"€299"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            price={"€599"}
          />
          <VideoBlock
            videoCover={"/images/work/cover.png"}
            videoDescription={"Model description"}
            price={"€499"}
          />
        </div>
      </div>
    </section>
  );
};

export default Examples;
