"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { fetchProductsByCategory } from "@/app/api/products";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";

const Products = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(category, 3);
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
      <section className="products">
        <div className="_container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {title}
          </motion.h2>
          <div className="products__body">
            {products.map((product) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={product.id}
              >
                <Link href={`/product/${product.slug}`}>
                  <img src={product.image} width={350} height={197} />
                </Link>

                <div className="product-info">
                  <h3>
                    <Link href={`/product/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{ __html: product.excerpt }}
                  />
                  <div className="add-to-cart">
                    <span>Price: €{product.price}</span>
                    <AddToCartButtonProduct product={product} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;