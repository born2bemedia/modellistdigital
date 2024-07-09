"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

const PopupsContext = createContext();

export const PopupsProvider = ({ children }) => {
  const [orderPopupDisplay, setOrderPopupDisplay] = useState(false);
  const [thanksPopupDisplay, setThanksPopupDisplay] = useState(false);
  const [serviceValue, setServiceValue] = useState(false);

  return (
    <PopupsContext.Provider
      value={{
        orderPopupDisplay,
        setOrderPopupDisplay,
        thanksPopupDisplay,
        setThanksPopupDisplay,
        serviceValue,
        setServiceValue
      }}
    >
      {children}
    </PopupsContext.Provider>
  );
};

export const usePopup = () => useContext(PopupsContext);
