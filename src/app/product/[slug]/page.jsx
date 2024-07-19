"use server";
import "@/styles/single-product.scss";
import { fetchProductBySlug } from "@/app/api/products";
import Image from "next/image";
import Products from "@/app/services/(inner_services)/3d-modeling/_components/Products";
import NeedAssistance from "@/components/NeedAssistance";
import SingleProductHero from "./_components/SingleProductHero";

export async function generateMetadata({ params: { slug } }) {
  const product = await fetchProductBySlug(slug);
  return {
    title: product.title,
    description: `Explore our ${product.title}, designed to elevate your projects with professional digital production. Discover high-quality, ready-made digital solutions at Modellist Digital.`,
    openGraph: {
      title: product.title,
      description: `Explore our ${product.title}, designed to elevate your projects with professional digital production. Discover high-quality, ready-made digital solutions at Modellist Digital.`,
      images: product.image,
    },
  };
}

const ProductSingle = async ({ params: { slug } }) => {
  const product = await fetchProductBySlug(slug);
  const categorySlug = product.categories?.[0]?.slug;

  return (
    <>
      <SingleProductHero product={product} />
      {categorySlug ? (
        <Products title="YOU MAY ALSO LIKE" category={categorySlug} />
      ) : (
        ""
      )}
      <NeedAssistance />
    </>
  );
};

export default ProductSingle;
