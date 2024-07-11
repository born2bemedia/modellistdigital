'use client';
import React from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const { cartQuantity } = useCart();

  return (
    <header>
      <div className="_container">
        <div className="header-row">
          <Link href="/">
            <img src="/images/header/logo.svg" alt="logo" />
          </Link>

          <div className="header-right">
            <div className="head-account">
              <Link href="#">Sign up</Link>
              <span>|</span>
              <Link href="#">Log in</Link>
            </div>
            <div>
              <Link href="/cart" className={`cart-icon ${cartQuantity > 0 && 'not-empty'}`}>
                <img src="/images/header/cart-icon.svg" alt="cart-icon" />
              </Link>
              <Link href="#">
                <img src="/images/header/menu-buger.svg" alt="menu-buger" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
