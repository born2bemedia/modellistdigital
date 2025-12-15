"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const ContactsHero = () => {
  return (
    <section className="contacts-hero">
      <div className="_container">
        <div className="contacts-hero__body">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            src="/images/contacts/contactsHero.webp"
            width={544}
            height={544}
          ></motion.img>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
            Contact us
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            We're here to help! Reach out through <br />
            any of the following methods.
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="contacts-hero__bottom"
        >
          <Link href="mailto:info@modellistdigital.com">
            Email us:
            <br />
            info@modellistdigital.com
          </Link>
          <Link href="tel:+442070433795">
            Call us:
            <br />
            +442070433795
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="soc"
        >
          <Link
            href="https://www.facebook.com/Modellistcom/"
            target="_blank"
          >
            <img src="/images/contacts/fb.svg" />
          </Link>
          <Link
            href="https://www.instagram.com/modellistdigital/"
            target="_blank"
          >
            <img src="/images/contacts/inst.svg" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsHero;
