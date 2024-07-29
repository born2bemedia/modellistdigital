"use client";
import React, { Suspense, useEffect, useState } from "react";
import "@/styles/single-product.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButtonSingle from "@/components/AddToCartButtonSingle";
import { fetchProductBySlug } from "@/app/api/products";
import Image from "next/image";
import dynamic from "next/dynamic";
import ReactPlayer from "react-player";

function SingleProductHero({ product }) {
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    console.log("Product loaded:", product);
    setVideo(product.preview_video);
  }, [product]);

  const handleVideoError = (error) => {
    console.error("Video error:", error);
    setVideoError(true);
  };

  return (
    <>
      <section className="single-product-hero">
        <div className="_container">
          <div className="single-product-hero__body">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="col-01"
            >
              {video && !videoError ? (
                <ReactPlayer
                  url={product.preview_video}
                  width={540}
                  height="305px"
                  //light={product.image}
                  playing={true}
                  muted={true}
                  controls={true}
                  className="single-video"
                  autoplay={true}
                  loop={true}
                />
              ) : (
                <Image
                  src={product.image ? product.image : "/images/work/cover.png"}
                  width={540}
                  height={305}
                />
              )}
            </motion.div>
            <div className="col-02">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                {product.title}
              </motion.h1>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                dangerouslySetInnerHTML={{ __html: product.content }}
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="add-to-cart"
              >
                <AddToCartButtonSingle product={product} />
                <span>PRICE: €{product.price}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProductHero;
