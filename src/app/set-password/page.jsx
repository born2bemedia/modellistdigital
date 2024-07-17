"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ChangePasswordReset from "../(account)/dashboard/_components/ChangePasswordReset";

const SetPassword = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (email && token) {
      localStorage.setItem("resetToken", token);
      localStorage.setItem("resetEmail", email);
    }
  }, [email, token]);

  if (!email || !token) {
    return <div>Invalid or expired link.</div>;
  }

  return <ChangePasswordReset />;
};

export default SetPassword;
