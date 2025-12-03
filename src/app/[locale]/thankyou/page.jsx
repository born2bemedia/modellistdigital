import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ThankyouPage = () => {
  const t = useTranslations('thankYou');

  return (
    <section className="thankyou-page">
      <div className="_container">
        <h1>{t('title', {fallback: 'Thank you for your order'})}</h1>
        <Link href="/" className="black-button">
          {t('home', {fallback: 'Home'})}
        </Link>
      </div>
    </section>
  );
};

export default ThankyouPage;
