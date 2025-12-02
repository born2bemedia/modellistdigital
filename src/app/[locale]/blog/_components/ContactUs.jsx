"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ContactUs = () => {
  const t = useTranslations('blog.contactUs');

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
            <h2>{t('title', {fallback: 'DID NOT FIND WHAT YOU WERE LOOKING FOR?'})}</h2>
            <p>
              {t('description.0', {fallback: 'Suggest your topic, and our team will craft a perfect collection of tips'})}<br />
              {t('description.1', {fallback: 'based on our hands-on experience.'})}
            </p>
          </div>
          <Link href="/contact-us" className="white-button">
            {t('button', {fallback: 'Contact us'})}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
