"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const NeedAssistance = () => {
  return (
    <section className="need-assistancs">
      <div className="_container">
        <motion.div className="need-assistancs__body">
          <h2>NEED ASSISTANCE?</h2>
          <Link href="#" className="white-button">
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedAssistance;
