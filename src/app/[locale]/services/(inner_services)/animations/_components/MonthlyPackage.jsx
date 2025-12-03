"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { fetchProductsByCategory } from "@/app/[locale]/api/products";
import Image from "next/image";

const MonthlyPackage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const category = "animations-monthly";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
        console.log(products);
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
            NEED ANIMATIONS REGULARLY? <br />
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
                className="monthly-pack"
              >
                <div>
                  <h3>{product.title}</h3>
                  {product.excerpt && (
                    <div className="excerpt">{product.excerpt}</div>
                  )}
                  <Image
                    src="/images/services/animationRetainer.png"
                    width={540}
                    height={390}
                  />
                </div>
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
