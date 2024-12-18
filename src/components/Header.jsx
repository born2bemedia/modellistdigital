"use client";
import React, { useEffect, useState } from "react";
import "@/styles/header.scss";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const { cart, cartQuantity } = useCart();
  const { currentUser } = useAuth();
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();

  const menuOpen = () => {
    setMenuOpened(!menuOpened);
    document.body.classList.toggle("no-scroll", !menuOpened);
  };

  useEffect(() => {
    setMenuOpened(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  return (
    <>
      <header className={`${menuOpened && "menu-opened"}`}>
        <div className="_container">
          <div className="header-row">
            <Link href="/" className="logo">
              {!menuOpened ? (
                <img src="/images/header/logo.svg" alt="logo" />
              ) : (
                <img src="/images/header/logo-white.svg" alt="logo" />
              )}
            </Link>

            <div className="header-right">
              <div className="soc">
                <Link
                  href="https://www.facebook.com/modellistdigit/"
                  target="_blank"
                >
                  <img src="/images/contacts/fb.svg" />
                </Link>
                <Link
                  href="https://www.instagram.com/modellistdigital/"
                  target="_blank"
                >
                  <img src="/images/contacts/inst.svg" />
                </Link>
                <Link href="https://x.com/modellistdigit" target="_blank">
                  <img src="/images/contacts/x.svg" />
                </Link>
              </div>

              <LangSwitcher />

              <div className="head-account">
                {currentUser ? (
                  <Link href="/dashboard">Account</Link>
                ) : (
                  <>
                    <Link href="/sign-up">Sign up</Link>
                    <span className="divider">|</span>
                    <Link href="/log-in">Log in</Link>
                  </>
                )}
              </div>
              <div>
                <Link
                  href="/cart"
                  className={`cart-icon ${cartQuantity > 0 && "not-empty"}`}
                >
                  {!menuOpened ? (
                    <img src="/images/header/cart-icon.svg" alt="cart-icon" />
                  ) : (
                    <img
                      src="/images/header/cart-icon-white.svg"
                      alt="cart-icon"
                    />
                  )}
                </Link>
                <span onClick={() => menuOpen()} className="menu-btn">
                  {!menuOpened ? (
                    <img src="/images/header/menu-buger.svg" alt="menu-buger" />
                  ) : (
                    <img alt="logo" src="/images/header/burger-close.svg" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-wrap ${menuOpened ? "opened" : ""}`}>
        <div className="_container">
          <nav>
            <div className="left-col">
              <Link href="/work">Work</Link>
              <Link href="/team">Team</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact-us">Contact us</Link>
            </div>
            <div className="right-col">
              <Link href="/services/video-production">Video production</Link>
              <Link href="/services/3d-modeling">3D modelling</Link>
              <Link href="/services/ux-ui-design">UX/UI design</Link>
              <Link href="/services/animations">Animations</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
