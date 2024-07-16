"use client";
import React, { useState, useEffect } from "react";
import LogoutButton from "./_components/LogoutButton";
import { useAuth } from "@/context/AuthContext";

export default function Account() {
  const { currentUser, fetchCurrentUser } = useAuth();

  const [openIndex, setOpenIndex] = useState(1);

  useEffect(() => {
    console.log(currentUser);
    setOpenIndex(1);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!currentUser) {
    return <p>Please log in.</p>;
  }

  return (
    <section className="account-wrap">
      <div className="_container">
        <div className="account-wrap__body">
          <h1 className="">
            Welcome,{" "}
            <span className="font-bold">{currentUser.displayName}</span>!
          </h1>
          <LogoutButton />
        </div>
      </div>
    </section>
  );
}
