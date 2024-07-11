"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const Packages = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = "3d-modeling-packages";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/get-packages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ category }),
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <section className="packages">
        <div className="_container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            READY-MADE 3D MODELLING PACKAGES
          </motion.h2>
          <div className="packages__body">
            {products.map((product) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={product.id}
              >
                <h3>{product.title}</h3>
                <div className="package-info">
                  <div dangerouslySetInnerHTML={{ __html: product.content }} />
                  <AddToCartButton product={product} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="get-quote">
            <h2>
              DID NOT FIND
              <br />A PERFECT MATCH?
            </h2>
            <Link href="#" className="white-button">
              Get a quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Packages;
