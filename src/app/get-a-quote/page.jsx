import React from 'react';
import "@/styles/quote.scss";
import QuoteHero from './_components/QuoteHero';
import RequestBlockQuote from '@/components/RequestBlockQuote';
import ThanksPopup from '@/components/ThanksPopup';

export const metadata = {
  title: "Get a quote",
  description:
    "Request a personalised quote for our digital services, including video production, 3D modelling, animations, and UI/UX design. Let's bring your ideas to life!",
  openGraph: {
    title: "Get a quote",
    description:
      "Request a personalised quote for our digital services, including video production, 3D modelling, animations, and UI/UX design. Let's bring your ideas to life!",
    //images: "https://vancantgroup.com/images/meta.png",
  },
};

const GetQuotePage = () => {
  return (
    <>
        <QuoteHero />
        <RequestBlockQuote />
        <ThanksPopup />
    </>
  )
}

export default GetQuotePage