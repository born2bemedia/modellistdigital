"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const ContactUs = () => {
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
            <h2>DID NOT FIND WHAT YOU WERE LOOKING FOR?</h2>
            <p>
              Suggest your topic, and our team will craft a perfect collection
              of tips <br />
              based on our hands-on experience.
            </p>
          </div>
          <Link href="/contact-us" className="white-button">
            Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
