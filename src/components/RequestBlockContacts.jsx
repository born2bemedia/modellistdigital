"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import RequestFormContacts from "./RequestFormContacts";

const RequestBlockContacts = () => {
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
              SEND A REQUEST
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Please fill out the form below for any inquiries, requests, <br/>or feedback. We'll get back to you as soon as possible.
            </motion.p>
          </div>
          <div className="col-02">
            <RequestFormContacts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestBlockContacts;
