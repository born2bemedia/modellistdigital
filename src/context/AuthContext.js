"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; 

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [jwt, setJwt] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const fetchCurrentUser = async () => {
    if (typeof window !== 'undefined') {
      const storedJwt = localStorage.getItem("jwt");
      const user = localStorage.getItem("user");
      if (storedJwt && user) {
        try {
          const decodedUser = JSON.parse(user);
          console.log(decodedUser);
          setCurrentUser(decodedUser);
          setJwt(storedJwt);
        } catch (error) {
          console.error("Failed to fetch current user", error);
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          setCurrentUser(null);
        }
      }
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    console.log("Current route:", pathname);
    if (pathname === '/dashboard') {
      // Perform any action needed when navigating to the dashboard
    }
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ currentUser, fetchCurrentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
