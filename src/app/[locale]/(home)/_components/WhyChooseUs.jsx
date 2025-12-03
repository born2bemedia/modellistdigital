"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations('home.whyChooseUs');

  return (
    <section className="why-choose">
      <div className="_container">
        <div className="why-choose__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('title.0', {fallback: 'WHY'})} <br />
              {t('title.1', {fallback: 'CHOOSE'})} <br />
              {t('title.2', {fallback: 'US'})}
            </motion.h2>

            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>01</span>
                  <span>{t('cards.0.title', {fallback: 'Extensive expertise'})}</span>
                </h3>
                <p>
                  {t('cards.0.text', {fallback: 'Our team has a wealth of knowledge and experience in various digital fields, ensuring we deliver innovative and effective video production services.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>02</span>
                  <span>{t('cards.1.title', {fallback: 'Top talents'})}</span>
                </h3>
                <p>
                  {t('cards.1.text', {fallback: 'We have assembled a team of highly skilled professionals who are passionate about creating outstanding video content that stands out.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>03</span>
                  <span>{t('cards.2.title', {fallback: 'Comprehensive approach'})}</span>
                </h3>
                <p>
                  {t('cards.2.text', {fallback: 'From consulting and strategy to production and distribution, we handle every aspect of the process to ensure a seamless and successful project.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>04</span>
                  <span>{t('cards.3.title', {fallback: 'Guaranteed quality'})}</span>
                </h3>
                <p>
                  {t('cards.3.text', {fallback: 'We promise that our products will match top industry standards, providing you with high-quality content that you can be proud of.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>05</span>
                  <span>{t('cards.4.title', {fallback: 'Market research'})}</span>
                </h3>
                <p>
                  {t('cards.4.text', {fallback: 'We thoroughly research the market and understand your audience\'s needs to craft a product that not only looks great but also effectively boosts your brand.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  <span>06</span>
                  <span>{t('cards.5.title', {fallback: 'Product Consistency'})}</span>
                </h3>
                <p>
                  {t('cards.5.text', {fallback: 'We keep all your data, style elements, and identity on file to ensure consistency across all your products. No matter when you order your next one, it will be perfectly aligned with your brand.'})}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Link href="/team" className="white-button">
                  {t('button', {fallback: 'Meet our team'})}
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="col-02">
            <div>
              <motion.img
                src="/images/home/examples/example1.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example2.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example3.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example4.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example5.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example6.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example7.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
              <motion.img
                src="/images/home/examples/example8.png"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              ></motion.img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
