import Products from "@/app/[locale]/services/(inner_services)/3d-modeling/_components/Products";
import RequestFormContacts from "@/components/RequestFormContacts";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const GetAssistance = () => {
  const t = useTranslations('dashboard.getAssistance');

  return (
    <div className="get-assistance">
      <h2>{t('title', {fallback: 'Get assistance'})}</h2>
      <p>
        {t('description.0', {fallback: 'We are here to help you with any questions or issues you may have.'})}
        <br />
        {t('description.1', {fallback: 'Please choose the type of assistance you need from the options below:'})}
      </p>

      <div className="contacts">
        <Link href="mailto:info@modellistdigital.com">
          {t('contacts.email', {fallback: 'Email us:'})}
          <br />
          info@modellistdigital.com
        </Link>
        <Link href="tel:+442070433795">
          {t('contacts.phone', {fallback: 'Call us:'})}
          <br />
          +442070433795
        </Link>
      </div>

      <h2>{t('sendRequest.title', {fallback: 'SEND A REQUEST'})}</h2>
      <p>
        {t('sendRequest.description.0', {fallback: 'Please fill out the form below for any inquiries, requests, or feedback.'})}
        <br />
        {t('sendRequest.description.1', {fallback: "We'll get back to you as soon as possible."})}
      </p>

      <RequestFormContacts />
    </div>
  );
};

export default GetAssistance;
