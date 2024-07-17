import React from 'react';
import "@/styles/contacts.scss";
import ContactsHero from './_components/ContactsHero';
import RequestBlockContacts from '@/components/RequestBlockContacts';
import VisitUs from './_components/VisitUs';
import ThanksPopup from '@/components/ThanksPopup';

export const metadata = {
    title: "Contact us",
    description:
      "Contact Modellist Digital for inquiries about our services, support, or collaborations. We're here to assist you with your digital production needs.",
    openGraph: {
      title: "Contact us",
      description:
        "Contact Modellist Digital for inquiries about our services, support, or collaborations. We're here to assist you with your digital production needs.",
      //images: "https://vancantgroup.com/images/meta.png",
    },
  };

const ContactUs = () => {
  return (
    <>
        <ContactsHero />
        <VisitUs />
        <RequestBlockContacts />
        <ThanksPopup />
    </>
  )
}

export default ContactUs