import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import { PhoneField } from "./PhoneField";

import ReCaptcha from "react-google-recaptcha";

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

const RequestFormContacts = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const onCaptchaVerify = (token) => {
    setIsCaptchaVerified(!!token);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    comment: Yup.string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
                placeholder="First Name"
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
                placeholder="Last Name"
                className={touched.lastName && errors.lastName ? "invalid" : ""}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={touched.email && errors.email ? "invalid" : ""}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <FormikPhoneField
                name="phone"
                placeholder="Phone"
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={touched.comment && errors.comment ? "invalid" : ""}
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", margin: '0 auto'}}>
              <ReCaptcha
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={onCaptchaVerify}
              />
              <button
                type="submit"
                className="white-button"
                disabled={isSubmitting || !isCaptchaVerified}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestFormContacts;
