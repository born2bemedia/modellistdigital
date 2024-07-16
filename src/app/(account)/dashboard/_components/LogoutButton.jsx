'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";
import React from 'react';

function LogoutButton() {
  const { setCurrentUser } = useAuth();
  const router = useRouter();

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    
    setCurrentUser(null);
    localStorage.removeItem('user');
    router.push('/sign-in'); // Redirect to the sign-in page
  };

  return (
    <button
      className="black-button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
