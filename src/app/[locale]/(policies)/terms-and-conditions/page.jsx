import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations('termsAndConditions');

  return (
    <section className="policy">
      <div className="_container">
        <h1>{t('title', {fallback: 'Terms and Conditions'})}</h1>
        <div className="content">
          <p>
            {t('content.0', {fallback: "Welcome to Modellist Digital, operated by The Modellist Limited (\"we,\" \"us,\" \"our\"). These Terms and Conditions (\"T&C\") govern your access to and use of our website and services, including video production, animation, UI and UX design on demand, and ready-made 3D models for 3D printing (collectively, the \"Services\"). You agree to comply with and be bound by these T&C by accessing or using our website."})}
          </p>
          <p>
            {t('content.1', {fallback: "The Modellist Limited is a company registered in England with the following details:"})}
          </p>
          <ul>
            <li>
              {t('content.2', {fallback: 'Registered Address:'})}{" "} 167 - 169 Great Portland Street, 5th Floor,
              London, England, W1W 5PF
            </li>
            <li>{t('content.3', {fallback: 'Registered Number:'})}{" "} 15795497</li>
            <li>
              {t('content.4', {fallback: 'Email:'})}{" "}
              <a href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </a>
            </li>
          </ul>
          <h3>
            <strong>{t('content.5', {fallback: 'Acceptance of the T&C'})}</strong>
          </h3>
          <p>
            {t('content.6', {fallback: "By accessing, browsing, or using the website, you acknowledge that you have read, understood, and agree to be bound by these T&C and our Privacy Policy, which is incorporated herein by reference. If you disagree with these T&C, you must not use our website or any of our Services."})}
          </p>
          <h3>
            <strong>{t('content.7', {fallback: 'Amendments to the T&C'})}</strong>
          </h3>
          <p>
            {t('content.8', {fallback: "We reserve the right to modify these T&C at any time. Any changes will be posted on this page, and the date at the top will indicate the latest revision. Your continued use of the website after any changes constitutes your acceptance of the new T&C. It is your responsibility to review these T&C periodically for updates. If you disagree with the amended T&C, stop using the website and Services."})}
          </p>
          <h2>
            <strong>{t('content.9', {fallback: 'Definitions'})}</strong>
          </h2>
          <p>
            <strong>{t('content.10', {fallback: 'Company'})}</strong>:{' '}
            {t('content.11', {fallback: "Throughout these Terms and Conditions, references to \"Company,\" \"we,\" \"us,\" or \"our\" mean The Modellist Limited, a company registered in England, located at 167 - 169 Great Portland Street, 5th Floor, London, England, W1W 5PF, with a registration number of 15795497. The Modellist Limited is responsible for managing your information by these T&C."})}
          </p>
          <p>
            <strong>{t('content.12', {fallback: 'Country'})}</strong>:{' '}
            {t('content.13', {fallback: "This refers to the United Kingdom, where The Modellist Limited and its founders are based."})}
          </p>
          <p>
            <strong>{t('content.14', {fallback: 'Device'})}</strong>:{' '}
            {t('content.15', {fallback: "Any electronic device that can connect to the Internet and access our website and services, including, but not limited to, smartphones, tablets, desktop computers, and laptops."})}
          </p>
          <p>
            <strong>{t('content.16', {fallback: 'Service'})}</strong>:{' '}
            {t('content.17', {fallback: "This term encompasses the various offerings provided by The Modellist Limited, such as video production, animation, UI and UX design on demand, and ready-made 3D models for 3D printing, as detailed on our platform."})}
          </p>
          <p>
            <strong>{t('content.18', {fallback: 'Third-party Service'})}</strong>:{' '}
            {t('content.19', {fallback: "Entities, including advertisers, sponsors of competitions, partners in promotional and marketing activities, and other external providers who contribute content to our platform or whose products and services might interest you."})}
          </p>
          <p>
            <strong>{t('content.20', {fallback: 'Website'})}</strong>: {t('content.21', {fallback: "The Modellist Limited's official online presence is at"})} <Link href="https://modellistdigital.com/">https://modellistdigital.com/</Link>.
          </p>
          <p>
            <strong>{t('content.22', {fallback: 'You'})}</strong>:{' '}
            {t('content.23', {fallback: "Anyone registered with The Modellist Limited to use our Services."})}
          </p>
          <h2>
            <strong>{t('content.24', {fallback: 'User Account'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.25', {fallback: 'Account Creation and Responsibilities'})}</strong>
          </h3>
          <p>{t('content.26', {fallback: "An account on our website provides:"})}</p>
          <ul>
            <li>{t('content.27', {fallback: "Access to essential features such as tracking your orders."})}</li>
            <li>{t('content.28', {fallback: "Accessing invoices."})}</li>
            <li>{t('content.29', {fallback: "Managing payment details."})}</li>
            <li>{t('content.30', {fallback: "Updating personal information."})}</li>
          </ul>
          <p>{t('content.31', {fallback: "To create and maintain an account, you agree to:"})}</p>
          <ol>
            <li>
              <strong>{t('content.32', {fallback: 'Provide Accurate Information'})}</strong>:{' '}
              {t('content.33', {fallback: "Ensure that all information you provide during registration is accurate, current, and complete. This includes your name, email address, billing information, and payment details. Accurate information is crucial for correct billing and product delivery."})}
            </li>
            <li>
              <strong>{t('content.34', {fallback: 'Confidentiality'})}</strong>:{' '}
              {t('content.35', {fallback: "You are responsible for maintaining the confidentiality of your account login information and all activities under your account. Notify us immediately if you suspect any unauthorised use of your account or any other security breach."})}
            </li>
            <li>
              <strong>{t('content.36', {fallback: 'Compliance'})}</strong>:{' '}
              {t('content.37', {fallback: "Use your account and our services in compliance with all applicable laws and regulations."})}
            </li>
          </ol>
          <p>
            {t('content.38', {fallback: "By creating an account, you consent to receive communications from us electronically regarding your account, orders, and other transactional information."})}
          </p>
          <h3>
            <strong>{t('content.39', {fallback: 'Account Termination'})}</strong>
          </h3>
          <p>
            {t('content.40', {fallback: "We reserve the right to suspend or terminate your account at our sole discretion if we believe that:"})}
          </p>
          <ol>
            <li>
              <strong>{t('content.41', {fallback: 'Violation of T&C:'})}</strong>:{' '}
              {t('content.42', {fallback: "You have violated these T&C or any other policies or guidelines applicable to our services."})}
            </li>
            <li>
              <strong>{t('content.43', {fallback: 'False Information'})}</strong>:{' '}
              {t('content.44', {fallback: "You have provided untrue, misleading, or incomplete information during the registration process or in your account profile."})}
            </li>
            <li>
              <strong>{t('content.45', {fallback: 'Unauthorised Use'})}</strong>:{' '}
              {t('content.46', {fallback: "There is unauthorised use of your account or any other security breach."})}
            </li>
            <li>
              <strong>{t('content.47', {fallback: 'Inactivity'})}</strong>:{' '}
              {t('content.48', {fallback: "Your account has been inactive for an extended period."})}
            </li>
          </ol>
          <p>
            {t('content.49', {fallback: "Your right to use the website and our services will immediately cease upon termination of your account. We will not be liable to you or any third party for any termination of your account or access to the website and services."})}
          </p>
          <p>
            {t('content.50', {fallback: "If your account is terminated, we may retain certain information as required by law or for legitimate business purposes. You can request to terminate your account anytime by contacting us at info@modellistdigital.com. Upon your request, we will deactivate or delete your account and associated information from our active databases as soon as reasonably possible, by our Privacy Policy and applicable laws."})}
          </p>
          <h2>
            <strong>{t('content.51', {fallback: 'Services Provided'})}</strong>
          </h2>
          <p>{t('content.52', {fallback: "We offer the following services:"})}</p>
          <ol>
            <li>
              <strong>{t('content.53', {fallback: 'Video Production'})}</strong>:{' '}
              {t('content.54', {fallback: "Our services cater to various needs, including promotional videos, instructional content, and more. We ensure high-quality production tailored to your needs."})}
            </li>
            <li>
              <strong>{t('content.55', {fallback: 'Animation'})}</strong>:{' '}
              {t('content.56', {fallback: "We create animated content for various purposes, including promotional videos, instructional content, and more. We ensure high-quality animation tailored to your needs."})}
            </li>
            <li>
              <strong>{t('content.57', {fallback: 'UI and UX Design on Demand'})}</strong>:{' '}
              {t('content.58', {fallback: "We create UI and UX designs on demand for various purposes, including promotional videos, instructional content, and more. We ensure high-quality UI and UX design tailored to your needs."})}
            </li>
            <li>
              <strong>{t('content.59', {fallback: 'Ready-Made 3D Models for 3D Printing'})}</strong>:{' '}
              {t('content.60', {fallback: "We offer a selection of pre-designed 3D models suitable for 3D printing enthusiasts. These models are for personal use only; commercial use is prohibited without prior authorization."})}
            </li>
          </ol>
          <h3>
            <strong>{t('content.61', {fallback: 'Service Availability and Modifications'})}</strong>
          </h3>
          <p>{t('content.62', {fallback: "Our services are available subject to the following conditions:"})}</p>
          <ol>
            <li>
              <strong>{t('content.63', {fallback: 'Availability'})}</strong>:{' '}
              {t('content.64', {fallback: "While we strive to maintain availability at all times, interruptions may occur due to maintenance, updates, or unforeseen circumstances. We will make reasonable efforts to minimise disruptions and notify users in advance when possible."})}
            </li>
            <li>
              <strong>{t('content.65', {fallback: 'Modifications'})}</strong>:{' '}
              {t('content.66', {fallback: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. This includes changes to service offerings, features, pricing, and availability. Such modifications may be necessary due to technological advancements, market conditions, or regulatory requirements. We will notify users of significant changes in advance."})}
            </li>
          </ol>
          <h2>
            <strong>{t('content.67', {fallback: 'Orders and Payments'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.68', {fallback: 'Ordering Process'})}</strong>
          </h3>
          <p>
            <strong>{t('content.69', {fallback: 'Order Placement'})}</strong>:{' '}
            {t('content.70', {fallback: "To place an order for our services, users must select the desired service and provide any necessary details or specifications. They can do this through our website or by contacting our customer support."})}
          </p>
          <p>
            <strong>{t('content.71', {fallback: 'Price Confirmation'})}</strong>:{' '}
            {t('content.72', {fallback: "After receiving the order, we may contact the user to confirm specific details and requirements that could affect pricing. Based on this information, we will prepare a detailed offer outlining the scope of work, features, and the corresponding price."})}
          </p>
          <p>
            <strong>{t('content.73', {fallback: 'Invoice Issuance'})}</strong>:{' '}
            {t('content.74', {fallback: "Upon user acceptance of the offered price, we will issue an invoice for the agreed-upon amount. The invoice will include payment instructions and any relevant terms and conditions."})}
          </p>
          <h3>
            <strong>{t('content.75', {fallback: 'Pricing and Payment Terms'})}</strong>
          </h3>
          <p>
            <strong>{t('content.76', {fallback: 'Payment in Advance'})}</strong>:{' '}
            {t('content.77', {fallback: "All products and services must be paid for in full and in advance before any work commences or products are delivered. We accept payments via methods specified on our website or as agreed upon with the user."})}
          </p>
          <p>
            <strong>{t('content.78', {fallback: 'Currency'})}</strong>:{' '}
            {t('content.79', {fallback: "Prices are quoted in the currency specified on our website or as agreed upon during the ordering process."})}
          </p>
          <p>
            <strong>{t('content.80', {fallback: 'Additional Costs'})}</strong>:{' '}
            {t('content.81', {fallback: "Any additional costs incurred due to changes or additional requirements requested after the initial order may result in an adjustment to the final price. We will communicate any such changes and obtain user consent before proceeding."})}
          </p>
          <h3>
            <strong>{t('content.82', {fallback: 'Refund and Cancellation Policy'})}</strong>
          </h3>
          <p>
            <strong>{t('content.83', {fallback: 'No Refunds'})}</strong>:{' '}
            {t('content.84', {fallback: "All payments are non-refundable except for technical overpayment or double payment due to a system error."})}
          </p>
          <p>
            <strong>{t('content.85', {fallback: 'Cancellation'})}</strong>:{' '}
            {t('content.86', {fallback: "Once an order is placed and payment is made, cancellation requests may be considered case-by-case. We reserve the right to deny cancellation requests or apply cancellation fees."})}
          </p>
          <p>
            <strong>{t('content.87', {fallback: 'Technical Issues'})}</strong>:{' '}
            {t('content.88', {fallback: "Users must notify us promptly if a technical issue results in an overpayment or double payment. Refunds will be processed within a reasonable timeframe, subject to verification."})}
          </p>
          <h2>
            <strong>{t('content.89', {fallback: 'User Conduct'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.90', {fallback: 'Acceptable Use Policy'})}</strong>
          </h3>
          <p>
            <strong>{t('content.91', {fallback: 'Compliance'})}</strong>:{' '}
            {t('content.92', {fallback: "Users must comply with all applicable laws and regulations when using our website and services."})}
          </p>
          <p>
            <strong>{t('content.93', {fallback: 'Respect for Others'})}</strong>:{' '}
            {t('content.94', {fallback: "Users must respect others' rights and privacy. This includes refraining from engaging in any activity that may harass, defame, intimidate, or harm another person or entity."})}
          </p>
          <p>
            <strong>{t('content.95', {fallback: 'Lawful Purposes'})}</strong>:{' '}
            {t('content.96', {fallback: "Our services may only be used for lawful purposes. Users must not use our website or services for illegal or unauthorised purposes."})}
          </p>
          <p>
            <strong>{t('content.97', {fallback: 'Accuracy of Information'})}</strong>:{' '}
            {t('content.98', {fallback: "Users are responsible for ensuring that all information provided to us is accurate, current, and complete."})}
          </p>
          <h3>
            <strong>{t('content.99', {fallback: 'Prohibited Activities'})}</strong>
          </h3>
          <p>
            <strong>{t('content.100', {fallback: 'Intellectual Property'})}</strong>:{' '}
            {t('content.101', {fallback: "Users must respect intellectual property rights and not infringe upon copyrights, trademarks, patents, or other proprietary rights."})}
          </p>
          <p>
            <strong>{t('content.102', {fallback: 'Unauthorised Access'})}</strong>:{' '}
            {t('content.103', {fallback: "Users must not attempt to gain unauthorised access to our systems or networks or interfere with the security features of our website."})}
          </p>
          <p>
            <strong>{t('content.104', {fallback: 'Malicious Activities'})}</strong>:{' '}
            {t('content.105', {fallback: "Users must not engage in any activity that could harm, disable, overburden, or impair our website or services, including but not limited to the introduction of viruses, malware, or any other harmful code."})}
          </p>
          <p>
            <strong>{t('content.106', {fallback: 'Spam'})}</strong>:{' '}
            {t('content.107', {fallback: "Users must not spam, including sending unsolicited promotional or commercial content."})}
          </p>
          <p>
            <strong>{t('content.108', {fallback: 'Misuse of Services'})}</strong>:{' '}
            {t('content.109', {fallback: "Users must not misuse our services, including but not limited to using automated systems to access or use our website or engaging in any activity that disrupts the regular operation of our services."})}
          </p>
          <p>
            <strong>{t('content.110', {fallback: 'Illegal Activities'})}</strong>:{' '}
            {t('content.111', {fallback: "Users must not use our website or services to engage in or promote illegal activities."})}
          </p>
          <h3>
            <strong>{t('content.112', {fallback: 'Enforcement'})}</strong>
          </h3>
          <p>
            {t('content.113', {fallback: "We reserve the right to investigate and take appropriate action against any user who violates these guidelines, including suspension or termination of their account and legal action if necessary. We may cooperate with law enforcement authorities or other third parties to investigate suspected criminal or civil wrongdoing."})}
          </p>
          <h2>
            <strong>{t('content.114', {fallback: 'Intellectual Property'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.115', {fallback: 'Ownership of Content'})}</strong>
          </h3>
          <p>
            <strong>{t('content.116', {fallback: 'Website Content'})}</strong>:{' '}
            {t('content.117', {fallback: "All content and materials on our website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, are the property of The Modellist Limited or its content suppliers and are protected by international copyright laws."})}
          </p>
          <p>
            <strong>{t('content.118', {fallback: 'Service Content'})}</strong>:{' '}
            {t('content.119', {fallback: "The services provided by The Modellist Limited, including video production, animation, UI and UX design, and ready-made 3D models for 3D printing, are also protected by copyright and other intellectual property rights."})}
          </p>
          <h3>
            <strong>{t('content.120', {fallback: 'Licence to Use the Website'})}</strong>
          </h3>
          <p>
            <strong>{t('content.121', {fallback: 'Permitted Use'})}</strong>:{' '}
            {t('content.122', {fallback: "Subject to compliance with these Terms and Conditions, The Modellist Limited grants users a limited, non-exclusive, non-transferable licence to access and use the website and its content for personal and non-commercial purposes."})}
          </p>
          <p>
            <strong>{t('content.123', {fallback: 'Restrictions'})}</strong>:{' '}
            {t('content.124', {fallback: "Users may not modify, copy, distribute, transmit, display, perform, reproduce, publish, licence, create derivative works from, transfer, or sell any information, software, products, or services obtained from the website without the express written permission of The Modellist Limited."})}
          </p>
          <h3>
            <strong>{t('content.125', {fallback: 'Enforcement of Rights'})}</strong>
          </h3>
          <p>
            {t('content.126', {fallback: "The Modellist Limited reserves the right to enforce its intellectual property rights to the fullest extent of the law. Unauthorised use of any content or materials on the website may violate copyright, trademark, and other laws. If you believe any website content infringes your intellectual property rights, please contact us at info@modellistdigital.com."})}
          </p>
          <h2>
            <strong>{t('content.127', {fallback: 'Privacy and Data Protection'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.128', {fallback: 'Handling of Personal Data'})}</strong>
          </h3>
          <p>
            <strong>{t('content.129', {fallback: 'Collection of Information'})}</strong>:{' '}
            {t('content.130', {fallback: "The Modellist Limited may collect personal information from users who use our website and services. This information may include but is not limited to name, email address, mailing address, phone number, payment information, and any other information voluntarily provided by users."})}
          </p>
          <p>
            <strong>{t('content.131', {fallback: 'Use of Information'})}</strong>:{' '}
            {t('content.132', {fallback: "We use the collected information for purposes such as processing orders, providing customer service, improving our services, and communicating with users about their accounts and offerings. We may also use this information to send promotional emails about new products, special offers, or other information that users may find interesting."})}
          </p>
          <p>
            <strong>{t('content.133', {fallback: 'Sharing of Information'})}</strong>: {' '}
            {t('content.134', {fallback: "We do not sell, trade, or otherwise transfer users' personal information to third parties without their consent, except as necessary to provide the requested services or as required by law."})}
          </p>
          <p>
            <strong>{t('content.135', {fallback: 'Data Security'})}</strong>:{' '}
            {t('content.136', {fallback: "We implement reasonable security measures to protect the confidentiality and security of users' personal information. However, no method of transmission over the Internet or electronic storage is entirely secure, so we cannot guarantee absolute security."})}
          </p>
          <h3>
            <strong>{t('content.137', {fallback: 'Cookie Policy'})}</strong>
          </h3>
          <p>
            <strong>{t('content.138', {fallback: 'Use of Cookies'})}</strong>:{' '}
            {t('content.139', {fallback: "Our website may use cookies and similar technologies to enhance user experience and analyse website usage. Cookies are small text files that a website sends to a user's device while browsing. They help us remember user preferences, track trends, and improve website performance."})}
          </p>
          <p>
            <strong>{t('content.140', {fallback: 'Types of Cookies'})}</strong>:{' '}
            {t('content.141', {fallback: "We may use session cookies (which expire when the user closes their browser) and persistent cookies (which remain on the user's device for a specified period) to provide a personalised experience. Users can control cookies through their browser settings and can delete or block cookies if they choose to do so."})}
          </p>
          <p>
            <strong>{t('content.142', {fallback: 'Third-Party Cookies'})}</strong>:{' '}
            {t('content.143', {fallback: "Third-party services integrated into our website, such as analytics providers or social media platforms, may also use cookies to collect information about users' interactions with our website."})}
          </p>
          <p>
            <strong>{t('content.144', {fallback: 'Acceptance of Cookies'})}</strong>:{' '}
            {t('content.145', {fallback: "By continuing to use our website, users consent to use cookies as described in our Cookie Policy. Users who do not wish to accept cookies can adjust their browser settings accordingly, although this may affect the functionality of certain parts of our website."})}
          </p>
          <h3>
            <strong>{t('content.146', {fallback: 'Compliance'})}</strong>
          </h3>
          <p>
            {t('content.147', {fallback: "The Modellist Limited complies with applicable data protection laws and regulations, including the General Data Protection Regulation (GDPR) for users in the European Union. For more information about how we handle personal data and cookies, please refer to our full Privacy Policy on our website."})}
          </p>
          <h2>
            <strong>{t('content.148', {fallback: 'Liability and Disclaimers'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.148', {fallback: 'Limitation of Liability'})}</strong>
          </h3>
          <p>
            <strong>{t('content.149', {fallback: 'Extent of Liability'})}</strong>:{' '}
            {t('content.150', {fallback: "To the fullest extent permitted by law, The Modellist Limited and its affiliates, officers, directors, employees, agents, suppliers, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or in connection with the use or inability to use our website or services."})}
          </p>
          <p>
            <strong>{t('content.151', {fallback: 'Direct Damages'})}</strong>:{' '}
            {t('content.152', {fallback: "In no event shall the total liability of The Modellist Limited and its affiliates, officers, directors, employees, agents, suppliers, and licensors exceed the amount paid by you, if any, for accessing or using our website or services during the twelve (12) months preceding the claim giving rise to liability."})}
          </p>
          <h3>
            <strong>{t('content.153', {fallback: 'Disclaimer of Warranties'})}</strong>
          </h3>
          <p>
            <strong>{t('content.154', {fallback: 'As Is Basis'})}</strong>:{' '}
            {t('content.155', {fallback: "Our website and services are provided on an \"as is\" and \"as available\" basis without any warranties, express or implied."})}
          </p>
          <p>
            <strong>{t('content.156', {fallback: 'No Warranty'})}</strong>:{' '}
            {t('content.157', {fallback: "To the fullest extent permitted by law, The Modellist Limited disclaims all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement of proprietary rights."})}
          </p>
          <p>
            <strong>{t('content.158', {fallback: 'Operation and Availability'})}</strong>:{' '}
            {t('content.159', {fallback: "The Modellist Limited does not warrant that the website or services will be uninterrupted, secure, or error-free or that any defects will be corrected. We make no representations or warranties regarding the accuracy, reliability, completeness, or timeliness of any content or information on the website."})}
          </p>
          <h3>
            <strong>{t('content.160', {fallback: 'Indemnification'})}</strong>
          </h3>
          <p>
            {t('content.161', {fallback: "You agree to indemnify, defend, and hold harmless The Modellist Limited and its affiliates, officers, directors, employees, agents, suppliers, and licensors from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use or misuse of our website or services, violation of these Terms and Conditions, or infringement of any intellectual property or other rights of any person or entity."})}
          </p>
          <h2>
            <strong>{t('content.162', {fallback: 'Governing Law and Dispute Resolution'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.163', {fallback: 'Applicable Law'})}</strong>
          </h3>
          <p>
            {t('content.164', {fallback: "These Terms and Conditions shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law principles."})}
          </p>
          <p>
            {t('content.165', {fallback: "If you access our website or services from outside England and Wales, you are responsible for compliance with local laws applicable to your use of the website or services."})}
          </p>
          <h3>
            <strong>{t('content.166', {fallback: 'Dispute Resolution Process'})}</strong>
          </h3>
          <p>
            {t('content.167', {fallback: "In the event of any dispute, claim, or controversy arising out of or relating to these Terms and Conditions, you agree to first attempt to resolve the matter informally through negotiation with The Modellist Limited."})}
          </p>
          <h3>
            <strong>{t('content.168', {fallback: 'Waiver of Class Actions'})}</strong>
          </h3>
          <p>
            {t('content.169', {fallback: "You agree that any arbitration or court proceeding shall be conducted on an individual basis and not as a class, consolidated, or representative action. You hereby waive any right to participate in any class action lawsuits, class-wide arbitration, or any other representative action against The Modellist Limited."})}
          </p>
          <h2>
            <strong>{t('content.170', {fallback: 'Miscellaneous'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.171', {fallback: 'Severability'})}</strong>
          </h3>
          <p>
            {t('content.172', {fallback: "If any provision of these Terms and Conditions is found invalid or unenforceable under any applicable law, such provision shall be deemed modified to the extent necessary to make it valid and enforceable. If such modification is not possible, the provision shall be severed from these Terms and Conditions, and the remaining provisions shall continue in full force and effect."})}
          </p>
          <h3>
            <strong>{t('content.173', {fallback: 'Entire Agreement'})}</strong>
          </h3>
          <p>
            {t('content.174', {fallback: "These Terms and Conditions constitute the entire agreement between you and The Modellist Limited regarding using our website and services, superseding any prior agreements or communications, whether oral or written, relating to the subject matter herein."})}
          </p>
          <h3>
            <strong>{t('content.175', {fallback: 'Waivers'})}</strong>
          </h3>
          <p>
            {t('content.176', {fallback: "The failure of The Modellist Limited to enforce any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms and Conditions will be effective only if in writing and signed by an authorised representative of The Modellist Limited."})}
          </p>
          <h2>
            <strong>{t('content.177', {fallback: 'Contact Us'})}</strong>
          </h2>
          <p>
            {t('content.178', {fallback: "If you have any questions about our website usage or these Terms and Conditions, please contact us at:"})}
          </p>
          <ul>
            <li>
              {t('content.179', {fallback: 'Email:'})}{" "}
              <Link href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </Link>
            </li>
            <li>
              {t('content.180', {fallback: 'Phone:'})}{" "}
              <Link href="tel:+442070433795">+442070433795</Link>
            </li>
            <li>
              {t('content.181', {fallback: 'Website:'})}{" "}
              <Link href="https://modellistdigital.com/">
                modellistdigital.com
              </Link>
            </li>
          </ul>
          <p>
            {t('content.182', {fallback: "We are here to assist you and strive to respond to all inquiries promptly."})}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
