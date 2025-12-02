import React from "react";
import "@/styles/policy.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PolicyPage = () => {
  const t = useTranslations('privacyPolicy');

  return (
    <section className="policy">
      <div className="_container">
        <h1>{t('title', {fallback: 'Privacy Policy'})}</h1>
        <div className="content">
          <p>
            {t('content.0', {fallback: 'Welcome to The Modellist Limited\'s Privacy Policy. This Policy governs the collection, use, and protection of your personal information when you visit our website, use our services, or interact with us in other ways. We are committed to protecting your privacy and handling personal information responsibly and transparently.'})}
          </p>
          <p>
            <strong>{t('content.1', {fallback: 'Company Details:'})}</strong>
          </p>
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
          <p>
            {t('content.7', {fallback: 'Please contact us if you have any questions or concerns regarding our Privacy Policy or how we handle your personal information.'})}
          </p>
          <h3>
            <strong>{t('content.8', {fallback: 'Overview of the Privacy Policy'})}</strong>
          </h3>
          <p>{t('content.9', {fallback: 'This Privacy Policy outlines:'})}</p>
          <ul>
            <li>
              {t('content.10', {fallback: 'The types of information we collect from users, including personal and non-personal data.'})}
            </li>
            <li>
              {t('content.11', {fallback: 'How do we use the information we collect, and what is the legal basis for processing it?'})}
            </li>
            <li>
              {t('content.12', {fallback: 'Circumstances under which we may share your information with third parties.'})}
            </li>
            <li>
              {t('content.13', {fallback: 'Your rights regarding your personal data and how you can exercise them.'})}
            </li>
            <li>
              {t('content.14', {fallback: 'How we protect the security and confidentiality of your information.'})}
            </li>
            <li>{t('content.15', {fallback: 'We use cookies and similar technologies on our website.'})}</li>
          </ul>
          <h3>
            <strong>{t('content.16', {fallback: 'Scope and Application'})}</strong>
          </h3>
          <p>
            {t('content.17', {fallback: 'This Privacy Policy applies to all of The Modellist Limited\'s website and service users. By accessing our website or using our services, you consent to collecting, using, and processing your information as described in this Privacy Policy. This Policy does not apply to third-party websites or services that may be accessed through links on our website, which are governed by their own privacy policies.'})}
          </p>
          <h2>
            <strong>{t('content.18', {fallback: 'Information We Collect'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.19', {fallback: 'Types of Information Collected'})}</strong>
          </h3>
          <p>{t('content.20', {fallback: 'We collect two main types of information:'})}</p>
          <p>
            <strong>{t('content.21', {fallback: 'Personal Information'})}</strong>{' '}
            {t('content.22', {fallback: 'This includes information that can identify you as an individual or reasonably linked to you. Examples may include:'})}
          </p>
          <ul>
            <li>{t('content.23', {fallback: 'Name'})}</li>
            <li>{t('content.24', {fallback: 'Email address'})}</li>
            <li>{t('content.25', {fallback: 'Mailing address'})}</li>
            <li>{t('content.26', {fallback: 'Phone number'})}</li>
            <li>{t('content.27', {fallback: 'Any other information you voluntarily provide to us'})}</li>
          </ul>
          <p>
            <strong>{t('content.28', {fallback: 'Non-Personal Information'})}</strong>:{' '}
            {t('content.29', {fallback: 'This type of information does not directly identify you. It may include:'})}
          </p>
          <ul>
            <li>{t('content.30', {fallback: 'Aggregated data about website usage patterns'})}</li>
            <li>{t('content.31', {fallback: 'Internet Protocol (IP) addresses'})}</li>
            <li>{t('content.32', {fallback: 'Browser type and version'})}</li>
            <li>{t('content.33', {fallback: 'Device identifiers'})}</li>
            <li>
              {t('content.34', {fallback: 'Cookies and similar technologies (see "Cookies and Similar Technologies" section for details)'})}
            </li>
          </ul>
          <h3>
            <strong>{t('content.35', {fallback: 'Methods of Collection'})}</strong>
          </h3>
          <p>{t('content.36', {fallback: 'We collect information in the following ways:'})}</p>
          <ul>
            <li>
              <strong>{t('content.37', {fallback: 'Directly from Users'})}</strong>:{' '}
              {t('content.38', {fallback: 'We may collect information when you voluntarily provide it, such as when you create an account, place an order, or communicate with us through our website or customer service channels.'})}
            </li>
            <li>
              <strong>{t('content.39', {fallback: 'Automatically through Cookies'})}</strong>:{' '}
              {t('content.40', {fallback: 'We use cookies and similar technologies to automatically collect certain information when you visit our website. This may include information about your browsing behaviour and preferences. For more details on how we use cookies, please refer to our "Cookies and Similar Technologies" section in this Privacy Policy.'})}
            </li>
          </ul>
          <h2>
            <strong>{t('content.41', {fallback: 'Use of Information'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.42', {fallback: 'Purpose of Collecting Information'})}</strong>
          </h3>
          <p>{t('content.43', {fallback: 'We collect and use your information for the following purposes:'})}</p>
          <p>
            <strong>{t('content.44', {fallback: 'To Provide Services'})}</strong>:{' '}
            {t('content.45', {fallback: 'We use your personal information to fulfil orders, deliver services you request, and process transactions. This includes communicating about your orders, invoices, and customer service issues.'})}
          </p>
          <p>
            <strong>{t('content.46', {fallback: 'To Improve User Experience'})}</strong>:{' '}
            {t('content.47', {fallback: 'We may use information to personalise your experience on our website, understand your preferences, and enhance the usability of our services.'})}
          </p>
          <p>
            <strong>{t('content.48', {fallback: 'To Communicate'})}</strong>:{' '}
            {t('content.49', {fallback: 'We may use your contact information to send you updates about our services, promotions, and other relevant communications based on your preferences and consent.'})}
          </p>
          <h3>
            <strong>{t('content.50', {fallback: 'Legal Basis for Processing Personal Data'})}</strong>
          </h3>
          <p>{t('content.51', {fallback: 'The legal basis for processing your data may include:'})}</p>
          <ul>
            <li>
              <strong>{t('content.52', {fallback: 'Contractual Necessity'})}</strong>:{' '}
              {t('content.53', {fallback: 'Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract (e.g., to process your orders).'})}
            </li>
            <li>
              <strong>{t('content.54', {fallback: 'Legitimate Interests'})}</strong>:{' '}
              {t('content.55', {fallback: 'Processing is necessary for our legitimate interests, such as improving our services, marketing our products, and ensuring the security of our website and services. We will ensure our legitimate interests do not override your rights and freedoms.'})}
            </li>
            <li>
              <strong>{t('content.56', {fallback: 'Consent'})}</strong>:{' '}
              {t('content.57', {fallback: 'We may rely on your consent to process certain types of personal data, such as sending marketing communications or using cookies. You have the right to withdraw your consent at any time.'})}
            </li>
          </ul>
          <h2>
            <strong>{t('content.58', {fallback: 'Sharing of Information'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.59', {fallback: 'Circumstances Under Which Information May Be Shared'})}</strong>
          </h3>
          <p>{t('content.60', {fallback: 'We may share your information in the following circumstances:'})}</p>
          <p>
            <strong>{t('content.61', {fallback: 'With Service Providers'})}</strong>:{' '}
            {t('content.62', {fallback: 'We may share your personal information with third-party service providers who perform services on our behalf, such as payment processing, order fulfilment, data analysis, marketing services, and customer support. These service providers are authorised to use your personal information only as necessary to provide these services to us.'})}
          </p>
          <p>
            <strong>{t('content.63', {fallback: 'For Legal Purposes'})}</strong>:{' '}
            {t('content.64', {fallback: 'We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests. This may include responding to court orders, subpoenas, or other legal obligations.'})}
          </p>
          <p>
            <strong>{t('content.65', {fallback: 'Business Transfers'})}</strong>:{' '}
            {t('content.66', {fallback: 'If we are involved in a merger, acquisition, financing due diligence, reorganisation, bankruptcy, or sale of all or a portion of our assets, your information may be transferred as part of that transaction. In such cases, we will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information and any choices you may have regarding your personal information.'})}
          </p>
          <h3>
            <strong>{t('content.67', {fallback: 'Third Parties with Whom Information May Be Shared'})}</strong>
          </h3>
          <p>{t('content.68', {fallback: 'We may share your information with the following third parties:'})}</p>
          <ul>
            <li>{t('content.69', {fallback: 'Payment processors: to facilitate transactions.'})}</li>
            <li>{t('content.70', {fallback: 'Shipping and logistics providers: to deliver documentation.'})}</li>
            <li>
              {t('content.71', {fallback: 'IT and security service providers: to ensure the security and functionality of our website and services.'})}
            </li>
            <li>
              {t('content.72', {fallback: 'Legal and regulatory authorities: as required by law or to protect our rights, property, or safety and those of others.'})}
            </li>
          </ul>
          <p>
            {t('content.73', {fallback: 'We do not sell or rent your personal information to third parties for their own marketing purposes without your explicit consent.'})}
          </p>
          <h2>
            <strong>{t('content.74', {fallback: 'Data Security'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.75', {fallback: 'Measures Taken to Protect Personal Data'})}</strong>
          </h3>
          <p>
            {t('content.76', {fallback: 'We implement reasonable and appropriate security measures to protect your personal data from unauthorised access, disclosure, alteration, or destruction. These measures include:'})}
          </p>
          <ul>
            <li>
              <strong>{t('content.77', {fallback: 'Encryption'})}</strong>:{' '}
              {t('content.78', {fallback: 'We use encryption techniques (such as SSL) to secure data transmitted over the internet.'})}
            </li>
            <li>
              <strong>{t('content.79', {fallback: 'Access Controls'})}</strong>:{' '}
              {t('content.80', {fallback: 'Access to your personal information is restricted to authorised personnel who need access to perform their job responsibilities.'})}
            </li>
            <li>
              <strong>{t('content.81', {fallback: 'Firewalls and Security Software'})}</strong>:{' '}
              {t('content.82', {fallback: 'We utilise firewalls, anti-virus software, and other security measures to protect against unauthorised system access.'})}
            </li>
            <li>
              <strong>{t('content.83', {fallback: 'Regular Security Audits'})}</strong>:{' '}
              {t('content.84', {fallback: 'We conduct security assessments and audits to identify and mitigate vulnerabilities.'})}
            </li>
          </ul>
          <h3>
            <strong>{t('content.85', {fallback: 'Handling of Data Breaches and Security Incidents'})}</strong>
          </h3>
          <p>
            {t('content.86', {fallback: 'In case of a data breach or security incident involving your personal data, we will promptly notify you and any relevant authorities by legal requirements. Our response will include:'})}
          </p>
          <ul>
            <li>
              <strong>{t('content.87', {fallback: 'Investigation'})}</strong>:{' '}
              {t('content.88', {fallback: 'An immediate investigation is needed to determine the cause and scope of the incident.'})}
            </li>
            <li>
              <strong>{t('content.89', {fallback: 'Notification'})}</strong>:{' '}
              {t('content.90', {fallback: 'Notification to affected individuals and authorities as required by law.'})}
            </li>
            <li>
              <strong>{t('content.91', {fallback: 'Mitigation'})}</strong>:{' '}
              {t('content.92', {fallback: 'Implement measures to mitigate any harm caused by the breach and prevent future incidents.'})}
            </li>
            <li>
              <strong>{t('content.93', {fallback: 'Assistance'})}</strong>:{' '}
              {t('content.94', {fallback: 'We will provide assistance, such as guidance on steps you can take to protect yourself if your personal information is compromised.'})}
            </li>
          </ul>
          <h2>
            <strong>{t('content.95', {fallback: 'Data Retention'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.96', {fallback: 'How Long Personal Data Is Retained'})}</strong>
          </h3>
          <p>
            {t('content.97', {fallback: 'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Privacy Policy unless a more extended retention period is required or permitted by law. The specific retention period for your personal data may vary depending on the following criteria:'})}
          </p>
          <h3>
            <strong>{t('content.98', {fallback: 'Criteria Used to Determine Retention Periods'})}</strong>
          </h3>
          <p>
            <strong>{t('content.99', {fallback: 'Purpose of Processing'})}</strong>:{' '}
            {t('content.100', {fallback: 'We will retain your personal data for as long as necessary to provide you with the products and services you requested.'})}
          </p>
          <p>
            <strong>{t('content.101', {fallback: 'Legal Obligations'})}</strong>:{' '}
            {t('content.102', {fallback: 'We may retain specific personal data to comply with legal obligations, such as tax and accounting requirements or regulatory obligations.'})}
          </p>
          <p>
            <strong>{t('content.103', {fallback: 'Business Needs'})}</strong>:{' '}
            {t('content.104', {fallback: 'We may retain personal data for as long as necessary for our legitimate business interests, such as maintaining business records, resolving disputes, and enforcing our agreements.'})}
          </p>
          <p>
            <strong>{t('content.105', {fallback: 'User Requests'})}</strong>:{' '}
            {t('content.106', {fallback: 'If you request deletion of your personal data by your rights (see "User Rights" section), we will securely delete or anonymize your information unless retention is required by law or legitimate business purposes.'})}
          </p>
          <h3>
            <strong>{t('content.107', {fallback: 'Data Minimization'})}</strong>
          </h3>
          <p>
            {t('content.108', {fallback: 'We strive to limit the collection of personal data to what is necessary and relevant for the purposes for which it is processed. We also periodically review and assess the need to retain personal data, considering the purposes for which it was collected.'})}
          </p>
          <h2>
            <strong>{t('content.109', {fallback: 'User Rights'})}</strong>
          </h2>
          <h3>
            <strong>
              {t('content.110', {fallback: 'Rights Available to Users Regarding Their Personal Data'})}
            </strong>
          </h3>
          <p>
            {t('content.111', {fallback: 'As a user, you have the following rights regarding your personal data:'})}
          </p>
          <p>
            <strong>{t('content.112', {fallback: 'Right to Access'})}</strong>:{' '}
            {t('content.113', {fallback: 'You can request access to the personal data we hold about you. This includes information about the categories of data we process, the purposes of processing, and the recipients or categories of recipients to whom the data have been or will be disclosed.'})}
          </p>
          <p>
            <strong>{t('content.114', {fallback: 'Right to Rectification'})}</strong>:{' '}
            {t('content.115', {fallback: 'You have the right to request that we correct any inaccuracies or incomplete information we hold about you.'})}
          </p>
          <p>
            <strong>{t('content.116', {fallback: 'Right to Erasure'})}</strong>:{' '}
            {t('content.117', {fallback: 'You can request that we delete your personal data under certain conditions. This right is not absolute and may be subject to legal obligations or legitimate interests.'})}
          </p>
          <p>
            <strong>{t('content.118', {fallback: 'Right to Restriction of Processing'})}</strong>:{' '}
            {t('content.119', {fallback: 'You have the right to request that we restrict the processing of your personal data under certain conditions.'})}
          </p>
          <p>
            <strong>{t('content.120', {fallback: 'Right to Data Portability'})}</strong>:{' '}
            {t('content.121', {fallback: 'You have the right to receive the personal data concerning you, which you have provided to us, in a structured, commonly used, and machine-readable format. You also have the right to transmit this data to another controller without hindrance from us.'})}
          </p>
          <p>
            <strong>{t('content.122', {fallback: 'Right to Object'})}</strong>:{' '}
            {t('content.123', {fallback: 'You have the right to object to processing your personal data under certain conditions, including processing for direct marketing purposes.'})}
          </p>
          <h3>
            <strong>{t('content.124', {fallback: 'How Users Can Exercise Their Rights'})}</strong>
          </h3>
          <p>
            {t('content.125', {fallback: 'To exercise any of the rights described above, please contact us using the contact information provided in the "Contact Us" section of this Privacy Policy. We will respond to your request within a reasonable timeframe and by applicable laws.'})}
          </p>
          <p>
            {t('content.126', {fallback: 'Please note that we may ask you to verify your identity before responding to such requests to ensure the security of your personal data.'})}
          </p>
          <h2>
            <strong>{t('content.127', {fallback: 'Cookies and Similar Technologies'})}</strong>
          </h2>
          <h3>
            <strong>{t('content.128', {fallback: 'Use of Cookies and Similar Technologies'})}</strong>
          </h3>
          <p>
            {t('content.129', {fallback: 'Cookies and similar technologies are used on our website to collect certain information and enhance your user experience. By using our website, you consent to using cookies by this policy.'})}
          </p>
          <h3>
            <strong>{t('content.130', {fallback: 'Types of Cookies Used, Purposes, and User Controls'})}</strong>
          </h3>
          <h4>
            <strong>{t('content.131', {fallback: 'Essential Cookies'})}</strong>
          </h4>
          <p>
            <strong>{t('content.132', {fallback: 'Purpose:'})}</strong>{' '}
            {t('content.133', {fallback: 'These cookies are necessary for the website to function correctly and cannot be switched off in our systems. They are usually only set in response to your actions, which amount to a service request, such as setting your privacy preferences, logging in, or filling in forms.'})}
          </p>
          <p>
            <strong>{t('content.134', {fallback: 'User Control'})}</strong>:{' '}
            {t('content.135', {fallback: 'You can set your browser to block or alert you about these cookies, but some parts of the site may not function properly.'})}
          </p>
          <h4>
            <strong>{t('content.136', {fallback: 'Analytical/Performance Cookies'})}</strong>
          </h4>
          <p>
            <strong>{t('content.137', {fallback: 'Purpose:'})}</strong>: {' '}
            {t('content.138', {fallback: "These cookies allow us to count visits and traffic sources to measure and improve our site's performance. They help us understand the most and least popular pages and see how visitors move around the site."})}
          </p>
          <p>
            <strong>{t('content.139', {fallback: 'User Control'})}</strong>: {' '}
            {t('content.140', {fallback: "You can disable these cookies by adjusting your browser settings, which may affect the website's functionality."})}
          </p>
          <h4>
            <strong>{t('content.141', {fallback: 'Functionality Cookies'})}</strong>
          </h4>
          <p>
            <strong>{t('content.142', {fallback: 'Purpose:'})}</strong>: {' '}
            {t('content.143', {fallback: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages."})}
          </p>
          <p>
            <strong>{t('content.144', {fallback: 'User Control'})}</strong>: {' '}
            {t('content.145', {fallback: "You can block or delete these cookies by changing your browser settings, but some website features may not work as intended."})}
          </p>
          <h4>
            <strong>{t('content.146', {fallback: 'Advertising/Targeting Cookies'})}</strong>
          </h4>
          <p>
            <strong>{t('content.147', {fallback: 'Purpose:'})}</strong>: {' '}
            {t('content.148', {fallback: "Our advertising partners may set these cookies through our site. Those companies may use them to build a profile of your interests and show you relevant ads on other sites."})}
          </p>
          <p>
            <strong>{t('content.149', {fallback: 'User Control'})}</strong>: {' '}
            {t('content.150', {fallback: "You can opt out of targeted advertising by visiting the websites of the third-party providers or through tools like the AdChoices Consumer Opt-Out."})}
          </p>
          <h3>
            <strong>{t('content.151', {fallback: 'Other Similar Technologies'})}</strong>
          </h3>
          <p>
            {t('content.152', {fallback: "In addition to cookies, we may use similar technologies, such as web beacons (also known as pixel tags or clear GIFs), to track user's actions on our website and gather demographic information about our user base."})}
          </p>
          <h2>
            <strong>{t('content.153', {fallback: 'Children\'s Privacy'})}</strong>
          </h2>
          <p>
            {t('content.154', {fallback: "Our website and services are not directed at children under 13 (or equivalent minimum age in relevant jurisdictions). We do not knowingly collect personal information from children under 13 without verifiable parental consent."})}
          </p>
          <h3>
            <strong>{t('content.155', {fallback: 'COPPA Compliance'})}</strong>
          </h3>
          <p>
            {t('content.156', {fallback: "In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect or maintain personal information from children under 13. If we discover that we have inadvertently collected personal information from a child under 13 without proper parental consent, we will delete that information as soon as possible."})}
          </p>
          <h3>
            <strong>{t('content.157', {fallback: 'Parental Rights'})}</strong>
          </h3>
          <p>
            {t('content.158', {fallback: "Parents or legal guardians who believe that we may have collected personal information from a child under 13 without appropriate consent may contact us using the contact information provided in this Privacy Policy's \"Contact Us\" section. Upon verification, we will promptly delete such information from our records."})}
          </p>
          <h2>
            <strong>{t('content.159', {fallback: 'Changes to This Privacy Policy'})}</strong>
          </h2>
          <h3>
            <strong>
              {t('content.160', {fallback: 'How and When Changes to the Privacy Policy Will Be Communicated'})}
            </strong>
          </h3>
          <p>
            {t('content.161', {fallback: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, and services. We will notify you of any material changes to this Privacy Policy by posting the updated policy on our website and updating the \"Effective Date\" at the top of the policy."})}
          </p>
          <h3>
            <strong>{t('content.162', {fallback: 'User Acceptance of Changes'})}</strong>
          </h3>
          <p>
            {t('content.163', {fallback: "By continuing to use our website or services after the updated Privacy Policy has been posted, you agree to the revised terms. If you do not agree with the changes, you should discontinue your use of our website and services."})}
          </p>
          <h3>
            <strong>{t('content.164', {fallback: 'Notification of Changes'})}</strong>
          </h3>
          <p>
            {t('content.165', {fallback: "We may also notify you of significant changes to this Privacy Policy through email or other means prior to the changes taking effect, where feasible and appropriate."})}
          </p>
          <h2>
            <strong>{t('content.166', {fallback: 'Contact Us'})}</strong>
          </h2>
          <p>
            {t('content.167', {fallback: "If you have any questions or concerns regarding our Privacy Policy, please contact us using the following information:"})}
          </p>
          <ul>
            <li>
              {t('content.168', {fallback: 'Email:'})}{" "}
              <Link href="mailto:info@modellistdigital.com">
                info@modellistdigital.com
              </Link>
            </li>
            <li>
              {t('content.169', {fallback: 'Phone:'})}{" "}
              <Link href="tel:+442070433795">+442070433795</Link>
            </li>
            <li>
              {t('content.170', {fallback: 'Website:'})}{" "}
              <Link href="https://modellistdigital.com/">
                modellistdigital.com
              </Link>
            </li>
          </ul>
          <p>
            {t('content.171', {fallback: "We encourage you to contact us if you have any inquiries about how we collect, use, or protect your personal information. We will strive to respond to all inquiries promptly and address any concerns you may have."})}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PolicyPage;
