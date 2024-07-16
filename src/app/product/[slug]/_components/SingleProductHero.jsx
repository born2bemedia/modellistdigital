"use client";
import React, { useEffect, useState } from "react";
import "@/styles/single-product.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButtonSingle from "@/components/AddToCartButtonSingle";
import { fetchProductBySlug } from "@/app/api/products";
import Image from "next/image";

function SingleProductHero({ product }) {
  return (
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
            <Image
              src={product.image ? product.image : "/images/work/cover.png"}
              width={540}
              height={305}
            />
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
  );
}

export default SingleProductHero;
