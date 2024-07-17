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

  useEffect(() => {
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
    country: getCountryOptionByCode(currentUser?.billing?.country) || {
      value: "US",
      label: "United States",
    },
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string()
      .matches(/^\d+$/, "Please provide a valid phone number.")
      .required("This field is required."),
    street: Yup.string().required("This field is required."),
    address: Yup.string(),
    city: Yup.string().required("This field is required."),
    state: Yup.string().required("This field is required."),
    zip: Yup.string().required("This field is required."),
    country: Yup.object().required("This field is required."),
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
        setBillingSuccess("Your information has been updated successfully.");
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
          <h2>Update your personal information</h2>
          <p>
            Keep your account details up-to-date to ensure smooth communication
            and service delivery.
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
                          placeholder="First name"
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
                          placeholder="Last name"
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
                          placeholder="Email"
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
                        <Field
                          placeholder="Phone"
                          type="text"
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
                          placeholder="Street"
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
                          placeholder="Address"
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
                          placeholder="City"
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
                          placeholder="State/Province"
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
                          placeholder="ZIP"
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
                    Save changes
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
