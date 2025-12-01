"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ProductionCycle = () => {
  const t = useTranslations('home.productionCycle');

  return (
    <section className="production-cycle">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t('title', {fallback: 'OUR PRODUCTION CYCLE'})}
        </motion.h2>
        <motion.div
          className="production-cycle__body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <motion.div className="item">
              <span>01</span>
              <h3>
                {t('cards.0.title.0', {fallback: 'Expert'})} <br />
                {t('cards.0.title.1', {fallback: 'consulting'})}
              </h3>
              <p>
                {t('cards.0.text', {fallback: 'We start by talking to you about your goals and vision. This ensures we\'re on the same page and can deliver what you\'re looking for.'})}
              </p>
              <h4>
                {t('cards.0.subtitle', {fallback: 'You get a clear understanding and aligned expectations from the start.'})}
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>02</span>
              <h3>
                {t('cards.1.title.0', {fallback: 'Creative'})} <br />
                {t('cards.1.title.1', {fallback: 'strategy'})}
              </h3>
              <p>
                {t('cards.1.text', {fallback: 'We create a plan that outlines the concept, steps, and timeline. This keeps you informed about what we\'re doing and when.'})}
              </p>
              <h4>
                {t('cards.1.subtitle', {fallback: 'You enjoy the clarity of the process and confidence in the plan.'})}
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>03</span>
              <h3>
                {t('cards.2.title.0', {fallback: 'Project'})}
                <br />
                {t('cards.2.title.1', {fallback: 'production'})}
              </h3>
              <p>
                {t('cards.2.text', {fallback: 'We take the idea and turn it into a video, animation, or model, bringing your vision to life.'})}
              </p>
              <h4>{t('cards.2.subtitle', {fallback: 'You get a draft of your idea that you can try and review.'})}</h4>
            </motion.div>
            <motion.div className="item">
              <span>04</span>
              <h3>
                {t('cards.3.title.0', {fallback: 'Review'})} <br />
                {t('cards.3.title.1', {fallback: 'and optimisation'})}
              </h3>
              <p>
                {t('cards.3.text', {fallback: 'You give us feedback on the draft, and we make the necessary changes to get it just right.'})}
              </p>
              <h4>
                {t('cards.3.subtitle', {fallback: 'You enjoy a final product that meets your needs and looks great.'})}
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>05</span>
              <h3>
                {t('cards.4.title.0', {fallback: 'Launch and'})} <br />
                {t('cards.4.title.1', {fallback: 'distribution'})}
              </h3>
              <p>
                {t('cards.4.text', {fallback: 'We help you share your content in the best places to reach your audience.'})}
              </p>
              <h4>
                {t('cards.4.subtitle', {fallback: 'Your video gets seen by the right people, maximising its impact.'})}
              </h4>
            </motion.div>
          </div>
        </motion.div>

        <div className="production-cycle__ready">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('ready.title.0', {fallback: 'READY'})}
            <br />
            {t('ready.title.1', {fallback: 'TO START?'})}
          </motion.h2>
          <Link className="black-button" href="/get-a-quote">
            {t('ready.text', {fallback: 'Get a quote'})}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductionCycle;
