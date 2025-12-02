import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import Select from "react-select";
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
      className={`form-field ${meta.touched && meta.error ? "invalid" : ""}`}
    />
  );
};

const RequestQuoteForm = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const t = useTranslations('requestQuoteForm');

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t('errors.firstName', {fallback: 'First name is required'})),
    lastName: Yup.string().required(t('errors.lastName', {fallback: 'Last name is required'})),
    email: Yup.string()
      .email(t('errors.invalidEmail', {fallback: 'Invalid email address'}))
      .required(t('errors.email', {fallback: 'Email is required'})),
    phone: Yup.string().required(t('errors.phone', {fallback: 'Phone is required'})),
    service: Yup.string().required(t('errors.service', {fallback: 'Service is required'})),
    budget: Yup.string().required(t('errors.budget', {fallback: 'Budget is required'})),
    description: Yup.string(),
    comment: Yup.string(),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    description: "",
    comment: "",
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/quote", {
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

  const serviceOptions = [
    { value: "Video production", label: t('services.0', {fallback: 'Video production'}) },
    { value: "3D modelling", label: t('services.1', {fallback: '3D modelling'}) },
    { value: "Animations", label: t('services.2', {fallback: 'Animations'}) },
    { value: "Ui/UX design", label: t('services.3', {fallback: 'Ui/UX design'}) },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#ffffff4d",
      height: "50px",
      borderRadius: "25px",
      background: "#ffffff0d",
      border: state.isFocused ? "1px solid #ffffff26" : "1px solid #ffffff26",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 20px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#ffffff26",
      },
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
      color: "#ffffff4d",
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
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#222222" : "#222222",
      color: "#ffffff",
      "&:hover": {
        background: "#161616",
      },
    }),
  };

  return (
    <div className="request-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, touched, errors }) => (
          <Form>
            <div>
              <Field
                name="firstName"
                type="text"
                placeholder={t('fields.firstName', {fallback: 'First Name'})}
                className={`form-field ${
                  touched.firstName && errors.firstName ? "invalid" : ""
                }`}
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
                className={`form-field ${
                  touched.lastName && errors.lastName ? "invalid" : ""
                }`}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder={t('fields.email', {fallback: 'Email'})}
                className={`form-field ${
                  touched.email && errors.email ? "invalid" : ""
                }`}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <FormikPhoneField
                name="phone"
                placeholder={t('fields.phone', {fallback: 'Phone'})}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div>
              <Select
                name="service"
                options={serviceOptions}
                styles={customStyles}
                className={`form-field ${
                  touched.service && errors.service ? "invalid" : ""
                }`}
                onChange={(option) => setFieldValue("service", option.value)}
                placeholder={t('fields.service', {fallback: 'Select Service'})}
              />
              <ErrorMessage name="service" component="div" className="error" />
            </div>

            <div>
              <Field
                name="budget"
                type="text"
                placeholder={t('fields.budget', {fallback: 'Budget'})}
                className={`form-field ${
                  touched.budget && errors.budget ? "invalid" : ""
                }`}
              />
              <ErrorMessage name="budget" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="timeline"
                type="text"
                placeholder={t('fields.timeline', {fallback: 'Timeline'})}
                className={`form-field ${
                  touched.timeline && errors.timeline ? "invalid" : ""
                }`}
              />
              <ErrorMessage name="timeline" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="description"
                as="textarea"
                placeholder={t('fields.description', {fallback: 'Project description'})}
                className={`form-field ${
                  touched.description && errors.description ? "invalid" : ""
                }`}
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>

            <div className="full">
              <Field
                name="comment"
                as="textarea"
                placeholder={t('fields.comments', {fallback: 'Additional comments'})}
                className={`form-field ${
                  touched.comment && errors.comment ? "invalid" : ""
                }`}
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="white-button"
              disabled={isSubmitting}
            >
              {t('fields.submit', {fallback: 'Submit your request'})}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestQuoteForm;
