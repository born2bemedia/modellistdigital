"use client";

import React from "react";

import { PhoneInput, defaultCountries } from "react-international-phone";

import st from "@/styles/phone-field.module.scss";

import { excludedCountries } from "@/utils/countries";

import "react-international-phone/style.css";
import { useCountryCode } from "@/utils/use-country-code";

export const PhoneField = ({ className, variant, ...args }) => {
  const country = useCountryCode();

  return (
    <PhoneInput
      defaultCountry={
        defaultCountries.some(
          ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2)
        )
          ? country
          : "us"
      }
      countries={defaultCountries.filter(
        ([, iso2]) => !excludedCountries.includes(iso2)
      )}
      className={`${st.container} ${
        variant === "light" ? st.containerLight : st.containerDark
      } ${className}`}
      inputClassName={`${st.phoneField} ${
        variant === "light" ? st.fieldLight : st.fieldDark
      }`}
      countrySelectorStyleProps={{
        buttonClassName: `${st.dropdown} ${
          variant === "light" ? st.dropdownLight : st.dropdownDark
        }`,
        dropdownStyleProps: {
          className: st.dropdownList,
        },
      }}
      {...args}
    />
  );
};
