import React from "react";
import "@/styles/header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="_container">
        <div className="header-row">
          <Link href="/">
            <img src="/images/header/logo.svg" />
          </Link>

          <div className="header-right">
            <div className="head-account">
              <Link href="#">Sign up</Link>
              <span>|</span>
              <Link href="#">Log in</Link>
            </div>
            <div>
              <Link href="#">
                <img src="/images/header/cart-icon.svg" />
              </Link>
              <Link href="#">
                <img src="/images/header/menu-buger.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
