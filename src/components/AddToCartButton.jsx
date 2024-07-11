"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

function AddToCartButton({ product }) {
  const router = useRouter();
  const { addToCart, cart } = useCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);
  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: 1, // You can adjust this as needed
    });
    router.push('/cart');
  };
  return (
    <>
      {existingIndex > -1 ? (
        <button disabled className="white-button">
          Already in cart 
        </button>
      ) : (
        <button
          className="white-button"
          onClick={() => handleAddToCart(product)}
        >
          €  {product.price}
        </button>
      )}
    </>
  );
}

export default AddToCartButton;
