"use client";
import "@/styles/services.scss";
import { fetchProductsByCategory } from "@/app/api/products";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";

const ModelingCategory = ({ params: { slug } }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pageTitle = slug.replace("-", " ");
    setTitle(pageTitle);

    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(slug, 9999);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug]);

  return (
    <>
      <section className="category-hero">
        <div className="_container">
          <div className="category-hero__body">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              src="/images/services/3d/3dHeroIcon.svg"
              width={48}
              height={48}
            ></motion.img>
            <motion.h1 initial="hidden" animate="visible" variants={fadeInUp}>
              {title}
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="_container">
          <div className="products__body">
            {products.map((product) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={product.id}
              >
                <Link
                  className="product-thumb"
                  href={`/product/${product.slug}`}
                >
                  <img src={product.image} width={350} height={197} />
                  {product.offer && (
                    <span className="offer">{product.offer} OFF!</span>
                  )}
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

export default ModelingCategory;
