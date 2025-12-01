import Link from "next/link";
import React from "react";
import DashboardProducts from "./DashboardProducts";

const MainTab = () => {
  return (
    <div className="main-tab">
      <h2>Welcome to your account dashboard</h2>
      <p>
        Manage your personal and billing information, view your order history,
        and access other features <br />
        to enhance your experience with us. If you need assistance, our support
        team is here to help.
      </p>

      <DashboardProducts title="" category="hot-offers" />

      <h2>EXPLORE OUR SERVICES</h2>

      <div className="explore">
        <Link href="/services/video-production">
          <span>Video production</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/3d-modeling">
          <span>3D modelling</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/animations">
          <span>Animation</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/ux-ui-design">
          <span>UI/UX design</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
      </div>

      <div className="pricing">
        <h2>
          GET OUR <br />
          PRICING GUIDE
        </h2>
        <Link href="/pricelist/price_list.pdf" target="_blank" className="pricelist">
          <span>
            Download <br />
            pricing guide
          </span>
          <span>
            <img src="/images/quote/downloadIcon.svg" alt="whiteArrow" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainTab;
