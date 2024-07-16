"use client";
import React, { useEffect, useState } from "react";
import "@/styles/single-product.scss";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButtonSingle from "@/components/AddToCartButtonSingle";
import { fetchProductBySlug } from "@/app/api/products";
import Image from "next/image";
import Products from "@/app/services/(inner_services)/3d-modeling/_components/Products";
import NeedAssistance from "@/components/NeedAssistance";

const ProductSingle = ({ params: { slug } }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductBySlug(slug);
        console.log(data);
        setCategory(data.categories[0].slug);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return (
    <>
      <section className="single-product-hero">
        <div className="_container">
          <div className="single-product-hero__body">
            <div className="col-01">
              <Image
                src={product.image ? product.image : "/images/work/cover.png"}
                width={540}
                height={305}
              />
            </div>
            <div className="col-02">
              <motion.h1>{product.title}</motion.h1>
              <motion.div
                dangerouslySetInnerHTML={{ __html: product.content }}
              />
              <div className="add-to-cart">
                <AddToCartButtonSingle product={product} />
                <span>PRICE: €{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Products title="YOU MAY ALSO LIKE" category={category} />

      <NeedAssistance />

    </>
  );
};

export default ProductSingle;
