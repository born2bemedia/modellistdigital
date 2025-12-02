"use client";
import "@/styles/account.scss";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import ChangePassword from "./ChangePassword";
import { PhoneField } from "@/components/PhoneField";
import { useTranslations } from "next-intl";

const getCountryOptionByCode = (code) => {
  const countries = countryList().getData();
  return countries.find((country) => country.value === code);
};

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "50px",
    borderRadius: "25px",
    background: "#0000000d",
    border: state.isFocused ? "1px solid #00000026" : "1px solid #00000026",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.2",
    textAlign: "left",
    padding: "0 20px",
    boxShadow: "unset",
    "&:hover": {
      borderColor: "#00000026",
    },
    ...(state.selectProps.menuIsOpen && {
      borderColor: "#00000026",
    }),
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
  }),
  input: (provided) => ({
    ...provided,
    height: "50px",
    margin: "0",
    padding: "0",
    border: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#161616",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    "> span": {
      display: "none",
    },
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),
  menu: (provided) => ({
    ...provided,
    background: "#e5e5e5",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#e5e5e5" : "#e5e5e5",
    color: "#161616",
    "&:hover": {
      background: "#B4FF05",
    },
  }),
};

const PersonalData = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [billingError, setBillingError] = useState("");
  const [billingSuccess, setBillingSuccess] = useState("");

  const t = useTranslations('dashboard.personalData');

  useEffect(() => {
    console.log("currentUser: ", currentUser);
    setIsMounted(true);
  }, []);

  const initialValues = {
    firstName: currentUser?.billing?.first_name || "",
    lastName: currentUser?.billing?.last_name || "",
    email: currentUser?.email || "",
    phone: currentUser?.billing?.phone || "",
    street: currentUser?.billing?.address_1 || "",
    address: currentUser?.billing?.address_2 || "",
    city: currentUser?.billing?.city || "",
    state: currentUser?.billing?.state || "",
    zip: currentUser?.billing?.postcode || "",
    country: getCountryOptionByCode(currentUser?.billing?.country) || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    lastName: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    email: Yup.string()
      .email(t('errors.invalidEmail', { fallback: 'Please provide a valid email address.' }))
      .required(t('errors.required', { fallback: 'This field is required.' })),
    phone: Yup.string()
      .matches(/^\d+$/, t('errors.invalidPhone', { fallback: 'Please provide a valid phone number.' }))
      .required(t('errors.required', { fallback: 'This field is required.' })),
    street: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    address: Yup.string(),
    city: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    state: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    zip: Yup.string().required(t('errors.required', { fallback: 'This field is required.' })),
    country: Yup.object().required(t('errors.required', { fallback: 'This field is required.' })),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const updateData = {
      billing: {
        first_name: values.firstName,
        last_name: values.lastName,
        address_1: values.street,
        address_2: values.address,
        city: values.city,
        state: values.state,
        postcode: values.zip,
        country: values.country.value,
        email: values.email,
        phone: values.phone,
      },
    };

    console.log("Updating user with data:", updateData);

    try {
      const response = await fetch("/api/auth/update-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setCurrentUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        setBillingSuccess(t('success', {fallback: 'Your information has been updated successfully.'}));
      } else {
        const errorData = await response.json();
        setBillingError(errorData.message);
      }
    } catch (error) {
      console.error("Failed to update user data", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="personal-data">
        <div className="_container">
          <h2>{t('title', {fallback: 'Update your personal information'})}</h2>
          <p>
            {t('description', {fallback: 'Keep your account details up-to-date to ensure smooth communication and service delivery.'})}
          </p>
          {isMounted && (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                isSubmitting,
                setFieldValue,
                status,
                touched,
                errors,
                values,
              }) => (
                <Form>
                  <div className="billing-data">
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.firstName', {fallback: 'First name'})}
                          type="text"
                          name="firstName"
                          className={
                            touched.firstName && errors.firstName
                              ? "invalid"
                              : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="firstName"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.lastName', {fallback: 'Last name'})}
                          type="text"
                          name="lastName"
                          className={
                            touched.lastName && errors.lastName ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="lastName"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.email', {fallback: 'Email'})}
                          type="email"
                          name="email"
                          className={
                            touched.email && errors.email ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <PhoneField
                          variant="light"
                          placeholder={t('fields.phone', {fallback: 'Phone'})}
                          name="phone"
                          className={
                            touched.phone && errors.phone ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="phone"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.street', {fallback: 'Street'})}
                          type="text"
                          name="street"
                          className={
                            touched.street && errors.street ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="street"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.address', {fallback: 'Address'})}
                          type="text"
                          name="address"
                          className={
                            touched.address && errors.address ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="address"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.city', {fallback: 'City'})}
                          type="text"
                          name="city"
                          className={
                            touched.city && errors.city ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="city"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.state', {fallback: 'State/Province'})}
                          type="text"
                          name="state"
                          className={
                            touched.state && errors.state ? "invalid" : ""
                          }
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="state"
                        component="div"
                      />
                    </div>
                    <div>
                      <label>
                        <Field
                          placeholder={t('fields.zip', {fallback: 'ZIP'})}
                          type="text"
                          name="zip"
                          className={touched.zip && errors.zip ? "invalid" : ""}
                        />
                      </label>
                      <ErrorMessage
                        className="error"
                        name="zip"
                        component="div"
                      />
                    </div>
                    <div>
                      <Field name="country">
                        {({ field }) => (
                          <Select
                            {...field}
                            options={countryList().getData()}
                            styles={customStyles}
                            className={`form-field ${
                              touched.country && errors.country ? "invalid" : ""
                            }`}
                            value={countryList()
                              .getData()
                              .find(
                                (option) =>
                                  option.value === values.country.value
                              )}
                            onChange={(option) =>
                              setFieldValue("country", option)
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="black-button"
                    disabled={isSubmitting}
                  >
                    {t('saveChanges', {fallback: 'Save changes'})}
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
        {billingError && <div className="billing-error">{billingError}</div>}
        {billingSuccess && (
          <div className="billing-success">{billingSuccess}</div>
        )}
      </section>

      <ChangePassword />
    </>
  );
};

export default PersonalData;
