"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const router = useRouter();
  const { setCurrentUser, currentUser } = useAuth();

  const t = useTranslations('logIn');

  useEffect(() => {
    if (currentUser) {
      //router.push("/dashboard");
    }
  }, [currentUser]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('errors.invalidEmail', {fallback: 'Invalid email address'})).required(t('errors.email', {fallback: 'Email is required'})),
    password: Yup.string().required(t('errors.password', {fallback: 'Password is required'})),
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post("/api/auth/log-in", {
        email: values.email,
        password: values.password,
      });
      if (response.status === 200) {
        const { token, user_email, user_nicename, user_display_name, billing } = response.data;
        const user = {
          email: user_email,
          nicename: user_nicename,
          displayName: user_display_name,
          billing, // Include billing data
        };
        console.log(user);
        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      setFieldError("email", t('errors.invalidCredentials', {fallback: 'Invalid email or password'}));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="log-in">
      <div className="_container">
        <h1>Log in</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder={t('fields.email', {fallback: 'Email'})}
                  className={touched.email && errors.email ? "invalid" : ""}
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder={t('fields.password', {fallback: 'Password'})}
                  className={touched.password && errors.password ? "invalid" : ""}
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button className="black-button" type="submit" disabled={isSubmitting}>
                {t('logIn', {fallback: 'Log in'})}
              </button>
              <Link className="reset" href="/reset-password">
                {t('forgotPassword', {fallback: 'Forgot password?'})}
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
