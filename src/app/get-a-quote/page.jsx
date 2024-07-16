import React from 'react';
import "@/styles/quote.scss";
import QuoteHero from './_components/QuoteHero';
import RequestBlockQuote from '@/components/RequestBlockQuote';

const GetQuotePage = () => {
  return (
    <>
        <QuoteHero />
        <RequestBlockQuote />
    </>
  )
}

export default GetQuotePage