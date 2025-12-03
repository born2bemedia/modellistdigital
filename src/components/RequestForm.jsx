import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import { PhoneField } from "./PhoneField";
import { useTranslations } from "next-intl";

// Custom Phone Field component that works with Formik
const FormikPhoneField = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <PhoneField
      {...field}
      {...props}
      value={field.value}
      onChange={(phone) => {
        helpers.setValue(phone);
      }}
      className={meta.touched && meta.error ? "invalid" : ""}
    />
  );
};

const RequestForm = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const t = useTranslations('requestForm');

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t('errors.firstName', {fallback: 'First name is required'})),
    lastName: Yup.string().required(t('errors.lastName', {fallback: 'Last name is required'})),
    email: Yup.string()
      .email(t('errors.invalidEmail', {fallback: 'Invalid email address'}))
      .required(t('errors.email', {fallback: 'Email is required'})),
    phone: Yup.string().required(t('errors.phone', {fallback: 'Phone is required'})),
    budget: Yup.string().required(t('errors.budget', {fallback: 'Budget is required'})),
    comment: Yup.string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    comment: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(JSON.stringify(values));
      if (response.ok) {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setThanksPopupDisplay(true);
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status, touched, errors }) => (
          <Form>
            <div>
              <Field
                name="firstName"
                type="text"
                placeholder={t('fields.firstName', {fallback: 'First Name'})}
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
                name="lastName"
                type="text"
                placeholder={t('fields.lastName', {fallback: 'Last Name'})}
                className={touched.lastName && errors.lastName ? "invalid" : ""}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder={t('fields.email', {fallback: 'Email'})}
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <FormikPhoneField
                variant="light"
                name="phone"
                placeholder={t('fields.phone', {fallback: 'Phone'})}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="budget"
                type="text"
                placeholder={t('fields.budget', {fallback: 'Budget'})}
                className={touched.budget && errors.budget ? "invalid" : ""}
              />
              <ErrorMessage name="budget" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="comment"
                as="textarea"
                placeholder={t('fields.comment', {fallback: 'Comment'})}
                className={touched.comment && errors.comment ? "invalid" : ""}
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="white-button"
              disabled={isSubmitting}
            >
              {t('button', {fallback: 'Submit'})}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
