"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ThreeDModeling = () => {
  const t = useTranslations('work.threeDModeling');

  return (
    <section className="video-examples threeD">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/3dModelingIcon.svg" />
            <Link href="/services/3d-modeling">
              <span>
                {t('title.0', {fallback: '3D'})}
                <br />
                {t('title.1', {fallback: 'MODELLING'})}
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
            {t('description', {fallback: 'Explore how our 3D modelling services bring your ideas to life with stunning precision and detail. Dive into our portfolio to see how we transform concepts into dynamic, realistic models that elevate your projects and captivate your audience.'})}
          </motion.div>

          <VideoBlock
            videoCover={"/images/home/3d/3d_1.webp"}
            videoDescription={t('videoDescription.0', {fallback: 'Golden Flower Elegance'})}
            category={t('threeDModeling', {fallback: '3D Modeling'})}
            buttonText={t('button', {fallback: 'Order a similar solution'})}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_2.webp"}
            videoDescription={t('videoDescription.1', {fallback: 'Elegant Ring with a Stunning Gemstone'})}
            category={t('threeDModeling', {fallback: '3D Modeling'})}
            buttonText={t('button', {fallback: 'Order a similar solution'})}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_3.webp"}
            videoDescription={t('videoDescription.2', {fallback: 'Elegant 4-Candle Holder for Ambient Lighting'})}
            category={t('threeDModeling', {fallback: '3D Modeling'})}
            buttonText={t('button', {fallback: 'Order a similar solution'})}
          />
          <VideoBlock
            videoCover={"/images/home/3d/3d_4.webp"}
            videoDescription={t('videoDescription.3', {fallback: 'Perfectly Hold Your Eggs with Style'})}
            category={t('threeDModeling', {fallback: '3D Modeling'})}
            buttonText={t('button', {fallback: 'Order a similar solution'})}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreeDModeling;
