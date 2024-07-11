"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

const MonthlyPackage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = "3d-modeling-monthly";

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
      <section className="packages monthly-package">
        <div className="_container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            NEED 3D MODELS REGULARLY?<br/>
            WE'VE GOT YOU COVERED!
          </motion.h2>
          <div className="packages__body monthly">
            {products.map((product) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={product.id}
                className=""
              >
                <h3>{product.title}</h3>
                {product.excerpt && (
                  <div className="excerpt">{product.excerpt}</div>
                )}
                <div className="package-info">
                  <div dangerouslySetInnerHTML={{ __html: product.content }} />
                  <AddToCartButton product={product} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MonthlyPackage;
