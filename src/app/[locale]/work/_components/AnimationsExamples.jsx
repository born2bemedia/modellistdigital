"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoBlock from "./VideoBlock";
import Link from "next/link";
import AnimationBlock from "./AnimationBlock";
import { useTranslations } from "next-intl";

const AnimationsExamples = () => {
  const t = useTranslations('work.animationsExamples');

  return (
    <section className="video-examples animations">
      <div className="_container">
        <div className="video-examples__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="title"
          >
            <img src="/images/work/AnimationsIcon.svg" />
            <Link href="/services/animations">
              <span>{t('title', {fallback: 'ANIMATIONS'})}</span>
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
            {t('description', {fallback: 'Experience the magic of our animation services, where imagination meets motion. Explore our portfolio to see how we bring ideas to life with dynamic and captivating animations that engage and inspire your audience.'})}
          </motion.div>

          <AnimationBlock
            videoUrl={"/videos/circle_anim.mp4"}
            videoCover={"/images/work/cover.png"}
            videoDescription={t('blocks.0.description', {fallback: 'Animated circle preloader'})}
            text={
              t('blocks.0.text', {fallback: 'Experience a dynamic Neon preloader featuring two rotating circles, each moving in opposite directions. Watch as the inner circle morphs shapes while the vibrant colours shift with every rotation.'})}
            category={t('blocks.0.category', {fallback: 'Animations'})}
            buttonText={t('blocks.0.buttonText', {fallback: 'Order a similar animation'})}
          />
          <AnimationBlock
            videoUrl={"/videos/text_anim.mp4"}
            videoCover={"/images/work/cover.png"}
            videoDescription={t('blocks.1.description', {fallback: 'Animated text'})}
            text={
              t('blocks.1.text', {fallback: 'Enjoy the elegant animation of text gracefully appearing letter by letter on the screen, ensuring readability at a comfortable pace for adults to absorb each word with clarity.'})}
            category={t('blocks.1.category', {fallback: 'Animations'})}
            buttonText={t('blocks.1.buttonText', {fallback: 'Order a similar animation'})}
          />
          <AnimationBlock
            videoUrl={"/videos/button_anim.mp4"}
            videoCover={"/images/work/cover.png"}
            videoDescription={t('blocks.2.description', {fallback: 'Animated button'})}
            text={
              t('blocks.2.text', {fallback: 'Discover an animated hover button adorned with a gradient from violet to pink. Upon hovering, witness its transformation to a serene lagoon blue, adding interactive charm and elegance to your interface.'})}
            category={t('blocks.2.category', {fallback: 'Animations'})}
            buttonText={t('blocks.2.buttonText', {fallback: 'Order a similar animation'})}
          />
          <AnimationBlock
            videoUrl={"/videos/ball_anim.mp4"}
            videoCover={"/images/work/cover.png"}
            videoDescription={t('blocks.3.description', {fallback: 'Animated ball preloader'})}
            text={
              t('blocks.3.text', {fallback: 'Behold a captivating preloader featuring a lively red ball bouncing energetically against a subdued grey backdrop. Its rhythmic motion signals ongoing activity.'})}
            category={t('blocks.3.category', {fallback: 'Animations'})}
            buttonText={t('blocks.3.buttonText', {fallback: 'Order a similar animation'})}
          />
          <AnimationBlock
            videoUrl={"/videos/heart_anim.mp4"}
            videoCover={"/images/work/cover.png"}
            videoDescription={t('blocks.4.description', {fallback: 'Animated neon heart'})}
            text={
              t('blocks.4.text', {fallback: 'Watch a neon pink heart sketch elegantly form on the screen. It begins to pulsate with a gentle rhythm and sends vibrant waves of neon colours, filling the screen with affection and energy.'})}
            category={t('blocks.4.category', {fallback: 'Animations'})}
            buttonText={t('blocks.4.buttonText', {fallback: 'Order a similar animation'})}
          />
        </div>
      </div>
    </section>
  );
};

export default AnimationsExamples;
