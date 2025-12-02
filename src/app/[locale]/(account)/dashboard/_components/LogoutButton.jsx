'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";
import React from 'react';
import { useTranslations } from 'next-intl';

function LogoutButton() {
  const { setCurrentUser } = useAuth();
  const router = useRouter();

  const t = useTranslations('dashboard');

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    
    setCurrentUser(null);
    localStorage.removeItem('user');
    router.push('/log-in'); // Redirect to the log-in page
  };

  return (
    <li
      onClick={handleLogout}
    >
      {t('logout', {fallback: 'Logout'})}
    </li>
  );
}

export default LogoutButton;
