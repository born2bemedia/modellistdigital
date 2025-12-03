import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations('refundPolicy');

  return (
    <section className="policy">
      <div className="_container">
        <h1>{t('title', {fallback: 'Refund Policy'})}</h1>
        <div className="content">
          <p>
            {t('content.0', {fallback: "Welcome to The Modellist Limited's Refund Policy. This policy outlines our guidelines regarding refunds for services provided by our company."})}
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
            <strong>{t('content.7', {fallback: 'No Refunds Under Normal Circumstances'})}</strong>
          </h3>
          <p>
            {t('content.8', {fallback: "We do not offer refunds if you have made a conscious decision to purchase our services, agreed to the price, and made a payment. This includes situations where you have received and accepted the deliverables outlined in your order."})}
          </p>
          <h3>
            <strong>{t('content.9', {fallback: 'Cases Eligible for Refund'})}</strong>
          </h3>
          <p>{t('content.10', {fallback: "Refunds may be considered in the following cases:"})}</p>
          <p>
            <strong>{t('content.11', {fallback: 'Incorrect Payment:'})}</strong>{' '}
            {t('content.12', {fallback: "If you have made an incorrect payment amount due to a typographical error or similar issue."})}
          </p>
          <p>
            <strong>{t('content.13', {fallback: 'Technical Issues:'})}</strong>{' '}
            {t('content.14', {fallback: "In the event of a technical bug or system error resulting in overpayment or double payment."})}
          </p>
          <h2>{t('content.15', {fallback: 'Dissatisfaction with Services'})}</h2>
          <p>
            {t('content.16', {fallback: "At The Modellist Limited, we strive to ensure your service satisfaction. If you are dissatisfied with the final product or service delivered, we encourage you to provide specific feedback and requirements for amendments. We are committed to making reasonable edits and adjustments to ensure the deliverables meet your expectations."})}
          </p>
          <h3>
            <strong>{t('content.17', {fallback: 'Amendment Process'})}</strong>
          </h3>
          <p>
            <strong>{t('content.18', {fallback: 'Feedback Submission:'})}</strong>{' '}
            {t('content.19', {fallback: "Please email your feedback and specific amendment requirements via info@modellistdigital.com. Include details about what aspects of the product or service do not meet your expectations."})}
          </p>
          <p>
            <strong>{t('content.20', {fallback: 'Review and Agreement:'})}</strong>{' '}
            {t('content.21', {fallback: "Upon receiving your feedback, we will review the provided information and discuss the proposed amendments or changes needed."})}
          </p>
          <p>
            <strong>{t('content.22', {fallback: 'Amendment Implementation:'})}</strong>{' '}
            {t('content.23', {fallback: "We will make edits and adjustments as agreed upon to align the product or service with your expectations."})}
          </p>
          <h3>
            <strong>{t('content.24', {fallback: 'Refund Policy Clarification'})}</strong>
          </h3>
          <p>
            {t('content.25', {fallback: "While we strive to address dissatisfaction through amendments, refunds are not offered in cases where your provided requirements have made amendments."})}
          </p>
          <h3>
            <strong>{t('content.26', {fallback: 'Requesting a Refund'})}</strong>
          </h3>
          <p>
            {t('content.27', {fallback: "If you believe you are eligible for a refund based on the criteria above, please email info@modellistdigital.com describing the reason for the refund request and providing as many details of the order as possible, including the order number, payment details, and any relevant documentation."})}
          </p>
          <h3>
            <strong>{t('content.28', {fallback: 'Refund Process'})}</strong>
          </h3>
          <ul>
            <li>
              <strong>{t('content.29', {fallback: 'Review:'})}</strong>{' '}
              {t('content.30', {fallback: "We will review your refund request promptly upon receipt."})}
            </li>
            <li>
              <strong>{t('content.31', {fallback: 'Notification:'})}</strong>{' '}
              {t('content.32', {fallback: "We will notify you by email if your refund request is approved or denied."})}
            </li>
            <li>
              <strong>{t('content.33', {fallback: 'Refund Timeline:'})}</strong> {t('content.34', {fallback: "Refunds will be processed within 30 days of approval using the original payment method unless otherwise agreed."})}
            </li>
          </ul>
          <h3>
            <strong>{t('content.35', {fallback: 'Contact Us'})}</strong>
          </h3>
          <p>
            {t('content.36', {fallback: "If you have any questions or need further clarification regarding our Refund Policy, please contact us using the following information:"})}
          </p>
          <ul>
            <li>
              {t('content.37', {fallback: 'Email:'})}{" "}
              <Link href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </Link>
            </li>
            <li>
              {t('content.38', {fallback: 'Phone:'})}{" "}
              <Link href="tel:+442070433795">+442070433795</Link>
            </li>
            <li>
              {t('content.39', {fallback: 'Website:'})}{" "}
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
