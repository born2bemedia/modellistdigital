"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const UxUiDesign = () => {
  const t = useTranslations('services.uiux');

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
              <Link href="/services/ux-ui-design">
                <span>
                  {t('title.0', {fallback: 'UX/UI'})}
                  <br />
                  {t('title.1', {fallback: 'DESIGN'})}
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('description', {fallback: 'Struggling with high bounce rates or low user engagement? Our UX/UI design services solve these problems by transforming your website or app into an intuitive, visually appealing platform that keeps users engaged.'})}
            </motion.p>
          </div>
          <img src="/images/work/ux1.png" />
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
              <b>{t('sections.text.0', {fallback: 'Wireframing and prototyping:'})}</b> {t('sections.text.1', {fallback: 'Detailed digital layouts and interactive prototypes that clarify user experience strategies.'})}
            </p>
            <p>
              <b>{t('sections.text.2', {fallback: 'User Interface design:'})}</b> {t('sections.text.3', {fallback: 'A user-friendly interface with cohesive branding, ensuring intuitive navigation and visual appeal.'})}
            </p>
            <p>
              <b>{t('sections.text.4', {fallback: 'Branding and identity design:'})}</b> {t('sections.text.5', {fallback: 'A unified visual identity package, including logos and design elements that strengthen brand recognition.'})}
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
              <b>{t('sections.text.6', {fallback: 'User flow optimization:'})}</b> {t('sections.text.7', {fallback: 'Optimised navigation structures that enhance usability and streamline the user journey.'})}
            </p>
            <p>
              <b>{t('sections.text.8', {fallback: 'Persona Development:'})}</b> {t('sections.text.9', {fallback: 'Detailed user profiles based on research, guiding design decisions to align with user expectations and behaviours.'})}
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
          <Link className="black-button" href="/services/ux-ui-design">
            {t('sections.learnMore', {fallback: 'Learn more'})}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default UxUiDesign;
