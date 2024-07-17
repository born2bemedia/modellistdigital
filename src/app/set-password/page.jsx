"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ChangePasswordReset from "../(account)/dashboard/_components/ChangePasswordReset";

const SetPassword = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email && token) {
      localStorage.setItem("resetToken", token);
      localStorage.setItem("resetEmail", email);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, token]);

  if (!isValid) {
    return <div>Invalid or expired link.</div>;
  }

  return <ChangePasswordReset />;
};

export default SetPassword;
