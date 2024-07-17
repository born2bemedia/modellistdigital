"use client";
import "@/styles/account.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import CheckboxIcon from "@/icons/CheckboxIcon";

export default function SignUp() {
  const [thanksPopupShow, setThanksPopupShow] = useState(false);
  const router = useRouter();
  const { setCurrentUser } = useAuth();

  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .matches(/^\d+$/, "Please provide a valid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
    terms: Yup.bool().oneOf([true], "You must accept the terms and conditions"),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("/api/auth/sign-up", {
        email: values.email,
        password: values.password,
        name: `${values.firstName} ${values.lastName}`,
        phone: values.phone,
      });
      if (response.status === 200) {
        const { token, user_email, user_nicename, user_display_name } =
          response.data;
        const user = {
          email: user_email,
          nicename: user_nicename,
          displayName: user_display_name,
        };

        setThanksPopupShow(true);
        setTimeout(() => {
          setThanksPopupShow(false);
          localStorage.setItem("jwt", token);
          localStorage.setItem("user", JSON.stringify(user));
          setCurrentUser(user);
          router.push("/dashboard");
        }, 3000);
      }
    } catch (error) {
      console.error("Registration failed", error.response.data);
      setFieldError("email", "An account with this email already exists");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="sign-up">
        <div className="_container">
          <h1>Create your account</h1>
          <p>
            Join us to access our services and exclusive offers. Fill out the
            form below to get started.
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form>
                <div>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className={
                      touched.firstName && errors.firstName ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className={
                      touched.lastName && errors.lastName ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your phone"
                    className={touched.phone && errors.phone ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className={touched.email && errors.email ? "invalid" : ""}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Your password"
                    className={
                      touched.password && errors.password ? "invalid" : ""
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={
                      touched.confirmPassword && errors.confirmPassword
                        ? "invalid"
                        : ""
                    }
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="checkbox">
                  <Field
                    type="checkbox"
                    name="terms"
                    className={touched.terms && errors.terms ? "invalid" : ""}
                    id="terms"
                  />
                  <label htmlFor="terms">
                    <CheckboxIcon />
                    <span>
                      I agree with the{" "}
                      <Link href="#">Terms and Conditions</Link> and{" "}
                      <Link href="#">Privacy Policy</Link>.
                    </span>
                  </label>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="button-wrap">
                  <button
                    className="black-button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
      {thanksPopupShow && (
        <div className={`thanks-popup-wrap ${thanksPopupShow ? "opened" : ""}`}>
          <div className="overlay"></div>
          <div className="popup-inner">
            <div>
              <div className="form-wrap">
                <div className="success">
                  <h3>Congratulations!</h3>
                  <p>
                    Your account has been successfully created. A confirmation
                    email has been sent to your inbox.
                    <br />
                    Welcome aboard!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
