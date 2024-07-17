import React from "react";
import Link from "next/link";

const ThankyouPage = () => {
  return (
    <section className="thankyou-page">
      <div className="_container">
        <h1>Thank you for your order</h1>
        <Link href="/" className="black-button">
          Home
        </Link>
      </div>
    </section>
  );
};

export default ThankyouPage;
