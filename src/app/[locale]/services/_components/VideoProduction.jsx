"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const VideoProduction = () => {
  const t = useTranslations('services.videoProduction');

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
              <img src="/images/work/videoProductionIcon.svg" />
              <Link href="#">
                <span>
                  {t('title.0', {fallback: 'VIDEO'})}
                  <br />
                  {t('title.1', {fallback: 'PRODUCTION'})}
                </span>
              </Link>
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('description', {fallback: 'Capture your audience\'s attention and boost engagement with expertly crafted videos. Our services are designed to help you build a solid personal brand or showcase your unique expertise effectively, addressing the need for impactful visual content that connects with your audience.'})}
            </motion.p>
          </div>
          <img src="/images/services/videoProductionCover.webp" />
        </div>

        <div className="service-block__bottom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <h3>{t('sections.0.title', {fallback: 'We craft'})}</h3>
            <p><b>{t('sections.0.text.0', {fallback: 'Event videography:'})}</b> {t('sections.0.text.1', {fallback: 'Professional coverage of weddings, parties, and corporate events.'})}</p>
            <p><b>{t('sections.0.text.2', {fallback: 'Family and portrait videos:'})}</b> {t('sections.0.text.3', {fallback: 'Customised portraits and family moments captured professionally.'})}</p>
            <p><b>{t('sections.0.text.4', {fallback: 'Travel and adventure videos:'})}</b> {t('sections.0.text.5', {fallback: 'Documenting global travels and outdoor experiences.'})}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <p><b>{t('sections.1.text.0', {fallback: 'Lifestyle videos:'})}</b> {t('sections.1.text.1', {fallback: 'Showcasing daily routines, hobbies, and interests.'})}</p>
            <p><b>{t('sections.1.text.2', {fallback: 'Personal branding videos:'})}</b> {t('sections.1.text.3', {fallback: 'Crafting impactful videos to enhance personal or professional brand presence.'})}</p>
            <p><b>{t('sections.1.text.4', {fallback: 'And many more…'})}</b></p>
          </motion.div>
        </div>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="button-wrap"
          >
            <Link className="black-button" href="/services/video-production">{t('sections.learnMore', {fallback: 'Learn more'})}</Link>
          </motion.div>
      </div>
    </section>
  );
};

export default VideoProduction;
