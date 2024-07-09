"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";

const RequestBlock = () => {
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
              UNSURE <br />
              WHICH SOLUTION <br />
              TO CHOOSE?
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Contact us to find the perfect fit for your idea.
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
