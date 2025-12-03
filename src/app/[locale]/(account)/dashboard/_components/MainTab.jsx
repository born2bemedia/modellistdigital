import Link from "next/link";
import React from "react";
import DashboardProducts from "./DashboardProducts";
import { useTranslations } from "next-intl";

const MainTab = () => {
  const t = useTranslations('dashboard');

  return (
    <div className="main-tab">
      <h2>{t('main.title', {fallback: 'Welcome to your account dashboard'})}</h2>
      <p>
        {t('main.description.0', {fallback: 'Manage your personal and billing information, view your order history, and access other features to enhance your experience with us. If you need assistance, our support team is here to help.'})}
         <br />
        {t('main.description.1', {fallback: 'If you need assistance, our support team is here to help.'})}
      </p>

      <DashboardProducts title="" category="hot-offers" />

      <h2>{t('main.services.title', {fallback: 'EXPLORE OUR SERVICES'})}</h2>

      <div className="explore">
        <Link href="/services/video-production">
          <span>{t('main.services.videoProduction', {fallback: 'Video production'})}</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/3d-modeling">
          <span>{t('main.services.3DModeling', {fallback: '3D modelling'})}</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/animations">
          <span>{t('main.services.animations', {fallback: 'Animation'})}</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
        <Link href="/services/ux-ui-design">
          <span>{t('main.services.uiUxDesign', {fallback: 'UI/UX design'})}</span>
          <span>
            <img src="/images/home/whiteArrow.svg" alt="whiteArrow" />
          </span>
        </Link>
      </div>

      <div className="pricing">
        <h2>
          {t('main.pricing.title', {fallback: 'GET OUR'})} <br />
          {t('main.pricing.title.1', {fallback: 'PRICING GUIDE'})}
        </h2>
        <Link href="/pricelist/price_list.pdf" target="_blank" className="pricelist">
          <span>
            {t('main.pricing.button.0', {fallback: 'Download'})} <br />
            {t('main.pricing.button.1', {fallback: 'pricing guide'})}
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
