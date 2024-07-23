import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";

const PolicyPage = () => {
  return (
    <section className="policy">
      <div className="_container">
        <h1>Refund Policy</h1>
        <div className="content">
          <p>
            Welcome to The Modellist Limited's Refund Policy. This policy
            outlines our guidelines regarding refunds for services provided by
            our company.
          </p>
          <h3>
            <strong>Company Details:</strong>
          </h3>
          <ul>
            <li>
              <strong>Company Name:</strong> The Modellist Limited
            </li>
            <li>
              <strong>Registered Number:</strong> 15795497
            </li>
            <li>
              <strong>Email:</strong> info@modellistdigital.com
            </li>
          </ul>
          <h3>
            <strong>No Refunds Under Normal Circumstances</strong>
          </h3>
          <p>
            We do not offer refunds if you have made a conscious decision to
            purchase our services, agreed to the price, and made a payment. This
            includes situations where you have received and accepted the
            deliverables outlined in your order.
          </p>
          <h3>
            <strong>Cases Eligible for Refund</strong>
          </h3>
          <p>Refunds may be considered in the following cases:</p>
          <p>
            <strong>Incorrect Payment:</strong> If you have made an incorrect
            payment amount due to a typographical error or similar issue.
          </p>
          <p>
            <strong>Technical Issues:</strong> In the event of a technical bug
            or system error resulting in overpayment or double payment.
          </p>
          <h2>Dissatisfaction with Services</h2>
          <p>
            At The Modellist Limited, we strive to ensure your service
            satisfaction. If you are dissatisfied with the final product or
            service delivered, we encourage you to provide specific feedback and
            requirements for amendments. We are committed to making reasonable
            edits and adjustments to ensure the deliverables meet your
            expectations.
          </p>
          <h3>
            <strong>Amendment Process</strong>
          </h3>
          <p>
            <strong>Feedback Submission:</strong> Please email your feedback and
            specific amendment requirements via info@modellistdigital.com.
            Include details about what aspects of the product or service do not
            meet your expectations.
          </p>
          <p>
            <strong>Review and Agreement:</strong> Upon receiving your feedback,
            we will review the provided information and discuss the proposed
            amendments or changes needed.
          </p>
          <p>
            <strong>Amendment Implementation:</strong> We will make edits and
            adjustments as agreed upon to align the product or service with your
            expectations.
          </p>
          <h3>
            <strong>Refund Policy Clarification</strong>
          </h3>
          <p>
            While we strive to address dissatisfaction through amendments,
            refunds are not offered in cases where your provided requirements
            have made amendments.
          </p>
          <h3>
            <strong>Requesting a Refund</strong>
          </h3>
          <p>
            If you believe you are eligible for a refund based on the criteria
            above, please email info@modellistdigital.com describing the reason
            for the refund request and providing as many details of the order as
            possible, including the order number, payment details, and any
            relevant documentation.
          </p>
          <h3>
            <strong>Refund Process</strong>
          </h3>
          <ul>
            <li>
              <strong>Review:</strong> We will review your refund request
              promptly upon receipt.
            </li>
            <li>
              <strong>Notification:</strong> We will notify you by email if your
              refund request is approved.
            </li>
            <li>
              <strong>Refund Timeline:</strong> Refunds will be processed within
              30 days of approval using the original payment method unless
              otherwise agreed.
            </li>
          </ul>
          <h3>
            <strong>Contact Us</strong>
          </h3>
          <p>
            If you have any questions or need further clarification regarding
            our Refund Policy, please contact us using the following
            information:
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
