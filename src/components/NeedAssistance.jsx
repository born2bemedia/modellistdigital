"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const NeedAssistance = () => {
  const t = useTranslations('needAssistance');

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
            <h2>{t('title', {fallback: 'NEED ASSISTANCE?'})}</h2>
          </div>
          <Link href="/contact-us" className="white-button">
            {t('button', {fallback: 'Contact us'})}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedAssistance;
