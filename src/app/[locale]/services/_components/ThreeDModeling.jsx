"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ThreeDModeling = () => {
  const t = useTranslations('services.threeDModeling');

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
              <img src="/images/work/3dModelingIcon.svg" />
              <Link href="#">
                <span>
                  {t('title.0', {fallback: '3D'})}
                  <br />
                  {t('title.1', {fallback: 'MODELLING'})}
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('description', {fallback: 'Enhance your projects with high-quality 3D modelling services designed to solve your specific needs. Our services help you visualise and bring your ideas to life, providing a powerful tool for personal projects and presentations.'})}
            </motion.p>
          </div>
          <img src="/images/services/modellingCover.webp" />
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
              <b>{t('sections.text.0', {fallback: 'Architectural modelling:'})}</b> {t('sections.text.1', {fallback: 'Creating detailed 3D models for personal architectural design and visualisation.'})}
            </p>
            <p>
              <b>{t('sections.text.2', {fallback: 'Character modelling:'})}</b> {t('sections.text.3', {fallback: 'Designing intricate 3D characters for animation and game development.'})}
            </p>
            <p>
              <b>{t('sections.text.4', {fallback: 'Product modelling:'})}</b> {t('sections.text.5', {fallback: 'Crafting realistic 3D product models for marketing and presentations.'})}
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
              <b>{t('sections.text.6', {fallback: 'Organic modelling:'})}</b> {t('sections.text.7', {fallback: 'Generating lifelike 3D models of plants and animals for educational and creative use.'})}
            </p>
            <p>
              <b>{t('sections.text.8', {fallback: 'Vehicle modelling:'})}</b> {t('sections.text.9', {fallback: 'Producing precise 3D models of vehicles for simulation and design projects.'})}
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
          <Link className="black-button" href="/services/3d-modeling">
            {t('sections.learnMore', {fallback: 'Learn more'})}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeDModeling;
