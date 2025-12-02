"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Animations = () => {
  const t = useTranslations('services.animations');

  return (
    <section className="service-block">
      <div className="_container">
        <div className="service-block__top">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="title"
            >
              <img src="/images/work/UiUxIcon.svg" />
              <Link href="#">
                <span>{t('title', {fallback: 'ANIMATIONS'})}</span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('description', {fallback: 'Transform your ideas into captivating visual stories with our animation services. Perfect for bloggers, influencers, and personal brands, our animations help you effectively express your creativity, engage your audience, and elevate your online presence.'})}
            </motion.p>
          </div>
          <img src="/images/services/animationsCover.webp" />
        </div>

        <div className="service-block__bottom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h3>{t('sections.title', {fallback: 'We craft'})}</h3>
            <p>
              <b>{t('sections.text.0', {fallback: 'Character Animation:'})}</b> {t('sections.text.1', {fallback: 'Fictional characters in motion to engage audiences and convey stories effectively.'})}
            </p>
            <p>
              <b>{t('sections.text.2', {fallback: 'Motion Graphics:'})}</b> {t('sections.text.3', {fallback: 'Graphical elements in motion to enhance visual communication and captivate viewers.'})}
            </p>
            <p>
              <b>{t('sections.text.4', {fallback: 'Interactive 3D Animations:'})}</b> {t('sections.text.5', {fallback: 'Simulations that present virtual environments in motion to provide immersive and engaging interactive experiences.'})}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <p>
              <b>{t('sections.text.6', {fallback: 'Product Animation:'})}</b> {t('sections.text.7', {fallback: 'Products in motion to showcase features, functionality, and benefits effectively.'})}
            </p>
            <p>
              <b>{t('sections.text.8', {fallback: 'Explainer Animation:'})}</b> {t('sections.text.9', {fallback: 'Complex ideas or processes in motion to simplify understanding and engage viewers effectively.'})}
            </p>
            <p>
              <b>{t('sections.text.10', {fallback: 'And many more…'})}</b>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="button-wrap"
        >
          <Link className="black-button" href="/services/animations">
            {t('sections.learnMore', {fallback: 'Learn more'})}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Animations;
