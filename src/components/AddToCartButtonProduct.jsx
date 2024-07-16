"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import AddToCartArrow from "@/icons/AddToCartArrow";

function AddToCartButtonProduct({ product }) {
  const router = useRouter();
  const { addToCart, cart } = useCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1, // You can adjust this as needed
    });
    router.push("/cart");
  };
  return (
    <>
      {existingIndex > -1 ? (
        <button disabled className="arrow-button">
          Already in cart
          <AddToCartArrow />
        </button>
      ) : (
        <button
          className="arrow-button"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
          <AddToCartArrow />
        </button>
      )}
    </>
  );
}

export default AddToCartButtonProduct;
