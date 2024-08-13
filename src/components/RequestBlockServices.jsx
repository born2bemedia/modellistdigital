"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import RequestFormContacts from "./RequestFormContacts";

const RequestBlockServices = () => {
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
              LET'S CONNECT
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              If you can't find the exact 3D model you're looking for, <br />
              don't worry! Reach out to our team of experts, and we'll <br />
              assist you in finding or crafting the perfect model to meet <br />
              your needs. Fill out the request form, and let's <br />
              connect to bring your ideas to life.
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

export default RequestBlockServices;
