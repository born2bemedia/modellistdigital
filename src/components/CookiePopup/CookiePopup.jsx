'use client';

import { useEffect, useState } from 'react';

import st from './CookiePopup.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const t = useTranslations('cookiePopup');

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <h2>{t('title', {fallback: 'Cookie settings'})}</h2>
      <p>
        {t('text.0', {fallback: 'Cookies help us improve our website. By clicking \'Accept,\' you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our {link}.', values: {link: <Link href="/cookie-policy" className={st.link}>{t('text.1', {fallback: 'Cookie Policy'})}</Link>}})}
        <Link href="/cookie-policy" className={st.link}>
          {t('text.1', {fallback: 'Cookie Policy'})}
        </Link>
        .
      </p>
      <div className={st.buttons}>
        <button onClick={handleAccept} className={st.decline}>
          {t('decline', {fallback: 'Decline'})}
        </button>
        <button onClick={handleAccept} className={st.accept}>
          {t('accept', {fallback: 'Accept'})}
        </button>
      </div>
    </div>
  );
};
