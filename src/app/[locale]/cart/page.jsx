"use client";
import "@/styles/cart.scss";
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
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

const CartPage = () => {
  const { cart, deleteFromCart, clearCart, totalAmount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const { currentUser, setCurrentUser, refreshToken } = useAuth();
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const t = useTranslations('cart');

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
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    lastName: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    email: Yup.string().email(t('errors.invalidEmail', {fallback: 'Please provide a valid email address.'})).required(t('errors.required', {fallback: 'This field is required.'})),
    phone: Yup.string().matches(/^\d+$/, t('errors.invalidPhone', {fallback: 'Please provide a valid phone number.'})).required(t('errors.required', {fallback: 'This field is required.'})),
    street: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    address: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    city: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    //state: Yup.string().required("This field is required."),
    zip: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    country: Yup.string().required(t('errors.required', {fallback: 'This field is required.'})),
    terms: Yup.bool().oneOf(
      [true],
      t('errors.terms', {fallback: 'You must accept the terms and conditions.'})
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const orderData = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: false,
      status: "processing",
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
      line_items: cart.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
    };

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

    try {
      if (currentUser) {
        const updateResponse = await fetch("/api/auth/update-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateData),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update user data");
        }

        const updatedUser = await updateResponse.json();
        setCurrentUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        //await refreshToken();
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        clearCart();
        router.push("/thankyou");
      } else {
        const errorData = await response.json();
        //alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      //alert("There was an error placing the order.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {isMounted && (
        <>
          {cart.length > 0 ? (
            <div>
              <section className="cart-wrap">
                <div className="_container">
                  <h1>{t('title', {fallback: 'Welcome to your cart!'})}</h1>
                  <p>
                    {t('description.0', {fallback: 'Review your selected services and products below.'})} <br />
                    {t('description.1', {fallback: "When you're ready, fill out your personal and billing information to complete your purchase."})}
                  </p>

                  <div className="cart">
                    <div className="cart-head">
                      <div>{t('table.0', {fallback: 'Product'})}</div>
                      <div>{t('table.1', {fallback: 'Quantity'})}</div>
                      <div>{t('table.2', {fallback: 'Price'})}, €</div>
                      <div>{t('table.3', {fallback: 'Action'})}</div>
                    </div>
                    <div className="cart-content">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                          <div>{item.title}</div>
                          <div>{item.quantity}</div>
                          <div>{item.price}</div>
                          <div>
                            <button onClick={() => deleteFromCart(item.id)}>
                              <DeleteIcon />
                              {t('remove', {fallback: 'Remove'})}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="total">{t('total', {fallback: 'Cart total'})}: €{totalAmount}</div>
                </div>
              </section>

              <section className="checkout-wrap">
                <div className="_container">
                  <div>
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
                          <h2>{t('billing.title', {fallback: 'BILLING data'})}</h2>
                          <div className="billing-data">
                            <div>
                              <label>
                                <Field
                                  placeholder={t('billing.fields.firstName', {fallback: 'First name'})}
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
                                  placeholder={t('billing.fields.lastName', {fallback: 'Last name'})}
                                  type="text"
                                  name="lastName"
                                  className={
                                    touched.lastName && errors.lastName
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.email', {fallback: 'Email'})}
                                  type="email"
                                  name="email"
                                  className={
                                    touched.email && errors.email
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.phone', {fallback: 'Phone'})}
                                  name="phone"
                                  className={
                                    touched.phone && errors.phone
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.street', {fallback: 'Street'})}
                                  type="text"
                                  name="street"
                                  className={
                                    touched.street && errors.street
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.address', {fallback: 'Address'})}
                                  type="text"
                                  name="address"
                                  className={
                                    touched.address && errors.address
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.city', {fallback: 'City'})}
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
                                  placeholder={t('billing.fields.state', {fallback: 'State/Province'})}
                                  type="text"
                                  name="state"
                                  className={
                                    touched.state && errors.state
                                      ? "invalid"
                                      : ""
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
                                  placeholder={t('billing.fields.zip', {fallback: 'ZIP'})}
                                  type="text"
                                  name="zip"
                                  className={
                                    touched.zip && errors.zip ? "invalid" : ""
                                  }
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
                                      touched.country && errors.country
                                        ? "invalid"
                                        : ""
                                    }`}
                                    value={countryList()
                                      .getData()
                                      .find(
                                        (option) =>
                                          option.value === values.country.value
                                      )}
                                    onChange={(option) => (
                                      console.log(option.value),
                                      setFieldValue("country", option.value)
                                    )}
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

                          <h2>{t('payment.title', {fallback: 'PAYMENT METHOD'})}</h2>
                          <div className="payment">
                            <div>{t('payment.subtitle', {fallback: 'Direct wire transfer'})}</div>
                            <p>
                              {t('payment.description', {fallback: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be processed until the funds have cleared in our account.'})}
                            </p>
                          </div>

                          <div className="place-order">
                            <div className="checkbox">
                              <Field
                                type="checkbox"
                                name="terms"
                                className={
                                  touched.terms && errors.terms ? "invalid" : ""
                                }
                                id="terms"
                              />
                              <label for="terms">
                                <CheckboxIcon />
                                <span>
                                  {t('placeOrder.0', {fallback: 'By placing your order, you agree to our'})} {" "}
                                  <Link href="/terms-and-conditions">
                                    {t('placeOrder.1', {fallback: 'Terms and Conditions'})}
                                  </Link>{" "}
                                  {t('placeOrder.2', {fallback: 'and consent to our'})} {" "}
                                  <Link href="/privacy-policy">
                                    {t('placeOrder.3', {fallback: 'Data Processing Policy'})}
                                  </Link>
                                  .
                                </span>
                              </label>
                              <ErrorMessage
                                name="terms"
                                component="div"
                                className="error"
                              />
                            </div>

                            <button
                              className="black-button"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              {t('order', {fallback: 'Order'})}
                            </button>
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </section>
            </div>
          ) : (
            <div>
              <section className="cart-wrap empty">
                <div className="_container">
                  <h1>{t('empty.title', {fallback: 'Your cart is empty'})}</h1>
                  <Link href="/" className="black-button">
                    {t('empty.button', {fallback: 'Home'})}
                  </Link>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartPage;
