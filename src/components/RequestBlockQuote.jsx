"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import RequestQuoteForm from "./RequestQuoteForm";
import { useTranslations } from "next-intl";

const RequestBlockQuote = () => {
  const t = useTranslations('getAQuote.requestBlock');

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
              {t('title', {fallback: 'REQUEST A QUOTE'})}
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {t('description.0', {fallback: 'Please fill out the form to help us'})} <br />
              {t('description.1', {fallback: 'understand your requirements better.'})}
            </motion.p>
          </div>
          <div className="col-02">
            <RequestQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestBlockQuote;
