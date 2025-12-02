"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";
import { useTranslations } from "next-intl";

const VideoProductionExamples = () => {
  const t = useTranslations('work.examples');

  return (
    <section className="video-examples">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/videoProductionIcon.svg" />
            <Link href="/services/video-production">
              <span>
                {t('title.0', {fallback: 'VIDEO'})}
                <br />
                {t('title.1', {fallback: 'PRODUCTION'})}
              </span>
              <img src="/images/work/arrow.svg" />
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="description"
          >
            {t('description', {fallback: 'Discover how our expertly crafted videos skyrocket your ideas, transforming concepts into captivating visuals that engage and inspire. Explore our portfolio to see the impact of high-quality production on your personal brand.'})}
          </motion.div>

          <VideoBlock
            videoUrl={"/videos/corrective-nutrition.webm"}
            videoCover={"/images/work/video1_cover.png"}
            category={t('videoProduction', {fallback: 'Video Production'})}
            buttonText={t('button', {fallback: 'Order a similar video'})}
          />
          <VideoBlock
            videoUrl={"/videos/successful_career.webm"}
            videoCover={"/images/work/video2_cover.png"}
            category={t('videoProduction', {fallback: 'Video Production'})}
            buttonText={t('button', {fallback: 'Order a similar video'})}
          />
        </div>
      </div>
    </section>
  );
};

export default VideoProductionExamples;
