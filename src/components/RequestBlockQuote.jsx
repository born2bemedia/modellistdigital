"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import RequestQuoteForm from "./RequestQuoteForm";

const RequestBlockQuote = () => {
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
              REQUEST A QUOTE
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Please fill out the form below to help us <br/>understand your requirements better.
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
