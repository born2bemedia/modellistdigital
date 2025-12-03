"use client";
import "@/styles/account.scss";
import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

export default function PasswordResetRequest() {
  const t = useTranslations('resetPassword');

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('errors.invalidEmail', {fallback: 'Invalid email address'}))
      .required(t('errors.email', {fallback: 'Email is required'})),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/auth/password-reset-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="log-in">
      <div className="_container">
        <h1>{t('title', {fallback: 'Reset your password'})}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors, status }) => (
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
              <button
                className="black-button"
                type="submit"
                disabled={isSubmitting}
              >
                {t('button', {fallback: 'Reset'})}
              </button>
              {status && status.success && (
                <div className="success">
                  <p>{t('success.title', {fallback: 'Reset link was sent to your email!'})}</p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
