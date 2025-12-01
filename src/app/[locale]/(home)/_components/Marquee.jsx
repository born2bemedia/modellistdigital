"use client";
import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ texts }) => {
  return (
    <div className="marquee">
      <motion.div
        className="track"
        animate={{ x: ["0", "-800px"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text">{text}</span>
            {index < texts.length - 1 && <span className="circle"></span>}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
