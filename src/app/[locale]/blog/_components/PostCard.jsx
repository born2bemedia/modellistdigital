"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const PostCard = ({ slug, title, image, excerpt }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="post-card"
    >
      <Link href={`/blog/${slug}`} className="thumb">
        <img src={image} />
      </Link>
      <div className="info">
        <div>
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </div>
        <Link href={`/blog/${slug}`} className="black-button">
          Read more
        </Link>
      </div>
    </motion.div>
  );
};

export default PostCard;
