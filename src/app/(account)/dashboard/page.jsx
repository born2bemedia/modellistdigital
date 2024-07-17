"use client";
import "@/styles/account.scss";
import React, { useState, useEffect } from "react";
import LogoutButton from "./_components/LogoutButton";
import { useAuth } from "@/context/AuthContext";
import MainTab from "./_components/MainTab";
import PersonalData from "./_components/PersonalData";
import OrderHistory from "./_components/OrderHistory";
import GetAssistance from "./_components/GetAssistance";
import ThanksPopup from "@/components/ThanksPopup";

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
    <>
      <section className="account-wrap">
      <div className="_container">
        <div className="account-wrap__body">
          <h1 className="">Account</h1>

          <ul className="account-nav">
            <li
              data-id={openIndex}
              aria-current="page"
              onClick={() => toggleItem(1)}
              className={`${openIndex === 1 && "active"}`}
            >
              Main
            </li>
            <li
              data-id={openIndex}
              aria-current="page"
              onClick={() => toggleItem(2)}
              className={`${openIndex === 2 && "active"}`}
            >
              Personal data
            </li>
            <li
              data-id={openIndex}
              aria-current="page"
              onClick={() => toggleItem(3)}
              className={`${openIndex === 3 && "active"}`}
            >
              Order history
            </li>
            <li
              data-id={openIndex}
              aria-current="page"
              onClick={() => toggleItem(4)}
              className={`${openIndex === 4 && "active"}`}
            >
              Get assistance
            </li>
            <LogoutButton />
          </ul>

          <div className={openIndex === 1 ? "block" : "hidden"}>
            <MainTab />
          </div>
          <div className={openIndex === 2 ? "block" : "hidden"}>
            <PersonalData />
          </div>
          <div className={openIndex === 3 ? "block" : "hidden"}>
            <OrderHistory />
          </div>
          <div className={openIndex === 4 ? "block" : "hidden"}>
            <GetAssistance />
          </div>
        </div>
      </div>
    </section>
    <ThanksPopup />
    </>
  );
}
