import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";

const PolicyPage = () => {
  return (
    <section className="policy">
      <div className="_container">
        <h1>Cookie Policy</h1>
        <div className="content">
          <p>
            Welcome to The Modellist Limited's Cookie Policy. This policy
            explains how we use cookies and similar technologies on our website.
            Using our website, you agree to cookies as described in this policy.
          </p>
          <h3>
            <strong>Company Details:</strong>
          </h3>
          <ul>
            <li>
              <strong>Company Name:</strong> The Modellist Limited
            </li>
            <li>
              <strong>Registered Address:</strong> 167 - 169 Great Portland
              Street, 5th Floor, London, England, W1W 5PF
            </li>
            <li>
              <strong>Registered Number:</strong> 15795497
            </li>
            <li>
              <strong>Email:</strong> info@modellistdigital.com
            </li>
          </ul>
          <h3>
            <strong>What Are Cookies?</strong>
          </h3>
          <p>
            Cookies are small text files stored on your computer or mobile
            device when you visit a website. They are widely used to make
            websites work more efficiently and to provide information to website
            owners.
          </p>
          <h3>
            <strong>How We Use Cookies</strong>
          </h3>
          <p>We use cookies for the following purposes:</p>
          <p>
            <strong>Essential Cookies:</strong> These cookies are necessary for
            the website to function correctly. They enable core functionalities
            such as security, network management, and accessibility.
          </p>
          <p>
            <strong>Analytical/Performance Cookies:</strong> These cookies help
            us understand how visitors interact with our website by collecting
            and reporting information anonymously. This helps us improve the
            performance of our website.
          </p>
          <p>
            <strong>Functionality Cookies:</strong> These cookies allow the
            website to remember your choices (such as your language preferences)
            and provide enhanced features.
          </p>
          <h3>
            <strong>Types of Cookies We Use</strong>
          </h3>
          <ul>
            <li>
              <strong>Session Cookies:</strong> These temporary cookies are
              erased when you close your browser.
            </li>
            <li>
              <strong>Persistent Cookies:</strong> These cookies remain on your
              device for a specified period or until you delete them.
            </li>
          </ul>
          <h3>
            <strong>Your Cookie Choices</strong>
          </h3>
          <p>
            You can control and manage cookies in various ways. Please note that
            disabling cookies may affect the functionality of certain parts of
            our website.
          </p>
          <p>
            <strong>Browser Settings:</strong> You can set your browser to
            refuse all or some browser cookies or to alert you when websites set
            or access cookies. Check your browser's help section to learn how to
            change your cookie preferences.
          </p>
          <p>
            <strong>Third-Party Tools:</strong> Some third-party tools allow you
            to decline cookies from specific providers.
          </p>
          <h3>
            <strong>Contact Us</strong>
          </h3>
          <p>
            If you have any questions or concerns about our Cookie Policy,
            please contact us using the following information:
          </p>
          <ul>
            <li>
              Email:{" "}
              <Link href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </Link>
            </li>
            <li>
              Phone: <Link href="tel:+442070433795">+442070433795</Link>
            </li>
            <li>
              Website:{" "}
              <Link href="https://modellistdigital.com/">
                modellistdigital.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
