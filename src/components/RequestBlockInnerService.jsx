"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import RequestForm from "./RequestForm";
import RequestFormContacts from "./RequestFormContacts";

const RequestBlockInnerService = () => {
  return (
    <section className="request-block inner-serv">
      <div className="_container">
        <div className="request-block__body">
          <div className="col-01">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              If you can't find the exact 3D model you're looking for, don't{" "}
              <br />
              worry! Reach out to our team of experts, and we'll assist you{" "}
              <br />
              in finding or crafting the perfect model to meet your needs.{" "}
              <br />
              Fill out the request form, and let's connect to bring your
              <br />
              ideas to life.
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

export default RequestBlockInnerService;
