"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const NeedAssistance = () => {
  return (
    <section className="need-assistancs">
      <div className="_container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="need-assistancs__body"
        >
          <div>
            <h2>NEED ASSISTANCE?</h2>
          </div>
          <Link href="/contact-us" className="white-button">
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedAssistance;
