import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations('cookiePolicy');

  return (
    <section className="policy">
      <div className="_container">
        <h1>{t('title', {fallback: 'Cookie Policy'})}</h1>
        <div className="content">
          <p>
            {t('content.0', {fallback: 'Welcome to The Modellist Limited\'s Cookie Policy. This policy explains how we use cookies and similar technologies on our website. Using our website, you agree to cookies as described in this policy.'})}
          </p>
          <h3>
            <strong>{t('content.1', {fallback: 'Company Details:'})}</strong>
          </h3>
          <ul>
            <li>
              <strong>{t('content.2', {fallback: 'Company Name:'})}</strong> The Modellist Limited
            </li>
            <li>
              <strong>{t('content.4', {fallback: 'Registered Address:'})}</strong> 167 - 169 Great Portland
              Street, 5th Floor, London, England, W1W 5PF
            </li>
            <li>
              <strong>{t('content.5', {fallback: 'Registered Number:'})}</strong> 15795497
            </li>
            <li>
              <strong>{t('content.6', {fallback: 'Email:'})}</strong> info@modellistdigital.com
            </li>
          </ul>
          <h3>
            <strong>{t('content.7', {fallback: 'What Are Cookies?'})}</strong>
          </h3>
          <p>
            {t('content.8', {fallback: 'Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.'})}
          </p>
          <h3>
            <strong>{t('content.9', {fallback: 'How We Use Cookies'})}</strong>
          </h3>
          <p>{t('content.10', {fallback: 'We use cookies for the following purposes:'})}</p>
          <p>
            <strong>{t('content.11', {fallback: 'Essential Cookies:'})}</strong>{' '}
            {t('content.12', {fallback: 'These cookies are necessary for the website to function correctly. They enable core functionalities such as security, network management, and accessibility.'})}
          </p>
          <p>
            <strong>{t('content.13', {fallback: 'Analytical/Performance Cookies:'})}</strong>{' '}
            {t('content.14', {fallback: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the performance of our website.'})}
          </p>
          <p>
            <strong>{t('content.15', {fallback: 'Functionality Cookies:'})}</strong>{' '}
            {t('content.16', {fallback: 'These cookies allow the website to remember your choices (such as your language preferences) and provide enhanced features.'})}
          </p>
          <h3>
            <strong>{t('content.17', {fallback: 'Types of Cookies We Use'})}</strong>
          </h3>
          <ul>
            <li>
              <strong>{t('content.18', {fallback: 'Session Cookies:'})}</strong>{' '}
              {t('content.19', {fallback: 'These temporary cookies are erased when you close your browser.'})}
            </li>
            <li>
              <strong>{t('content.20', {fallback: 'Persistent Cookies:'})}</strong>{' '}
              {t('content.21', {fallback: 'These cookies remain on your device for a specified period or until you delete them.'})}
            </li>
          </ul>
          <h3>
            <strong>{t('content.22', {fallback: 'Your Cookie Choices'})}</strong>
          </h3>
          <p>
            {t('content.23', {fallback: 'You can control and manage cookies in various ways. Please note that disabling cookies may affect the functionality of certain parts of our website.'})}
          </p>
          <p>
            <strong>{t('content.24', {fallback: 'Browser Settings:'})}</strong>{' '}
            {t('content.25', {fallback: 'You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. Check your browser\'s help section to learn how to change your cookie preferences.'})}
          </p>
          <p>
            <strong>{t('content.26', {fallback: 'Third-Party Tools:'})}</strong>{' '}
            {t('content.27', {fallback: 'Some third-party tools allow you to decline cookies from specific providers.'})}
          </p>
          <h3>
            <strong>{t('content.28', {fallback: 'Contact Us'})}</strong>
          </h3>
          <p>
            {t('content.29', {fallback: 'If you have any questions or concerns about our Cookie Policy, please contact us using the following information:'})}
          </p>
          <ul>
            <li>
              {t('content.6', {fallback: 'Email:'})}:{" "}
              <Link href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </Link>
            </li>
            <li>
              {t('content.30', {fallback: 'Phone:'})}: <Link href="tel:+442070433795">+442070433795</Link>
            </li>
            <li>
              {t('content.31', {fallback: 'Website:'})}:{" "}
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
