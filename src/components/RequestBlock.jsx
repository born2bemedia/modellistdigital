"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import { useTranslations } from "next-intl";

const RequestBlock = () => {
  const t = useTranslations('work.requestBlock');

  return (
    <section className="request-block">
      <div className="_container">
        <div className="request-block__body">
          <div className="col-01">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('title.0', {fallback: 'UNSURE'})} <br />
              {t('title.1', {fallback: 'WHICH SOLUTION'})} <br />
              {t('title.2', {fallback: 'TO CHOOSE?'})}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('text', {fallback: 'Contact us to find the perfect fit for your idea.'})}
            </motion.p>
          </div>
          <div className="col-02">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestBlock;
