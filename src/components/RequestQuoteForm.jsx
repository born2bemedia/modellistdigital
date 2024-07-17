import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import Select from "react-select";

const RequestQuoteForm = () => {
  const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    service: Yup.string().required("Service is required"),
    budget: Yup.string().required("Budget is required"),
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
    { value: "Video production", label: "Video production" },
    { value: "3D modelling", label: "3D modelling" },
    { value: "Animations", label: "Animations" },
    { value: "Ui/UX design", label: "Ui/UX design" },
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
                placeholder="First Name"
                className={`form-field ${touched.firstName && errors.firstName ? "invalid" : ""}`}
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
                className={`form-field ${touched.lastName && errors.lastName ? "invalid" : ""}`}
              />
              <ErrorMessage name="lastName" component="div" className="error" />
            </div>

            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={`form-field ${touched.email && errors.email ? "invalid" : ""}`}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <Field
                name="phone"
                type="tel"
                placeholder="Phone"
                className={`form-field ${touched.phone && errors.phone ? "invalid" : ""}`}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div>
              <Select
                name="service"
                options={serviceOptions}
                styles={customStyles}
                className={`form-field ${touched.service && errors.service ? "invalid" : ""}`}
                onChange={(option) => setFieldValue("service", option.value)}
                placeholder="Select Service"
              />
              <ErrorMessage name="service" component="div" className="error" />
            </div>

            <div>
              <Field
                name="budget"
                type="text"
                placeholder="Budget"
                className={`form-field ${touched.budget && errors.budget ? "invalid" : ""}`}
              />
              <ErrorMessage name="budget" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="timeline"
                type="text"
                placeholder="Timeline"
                className={`form-field ${touched.timeline && errors.timeline ? "invalid" : ""}`}
              />
              <ErrorMessage name="timeline" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="description"
                as="textarea"
                placeholder="Project description"
                className={`form-field ${touched.description && errors.description ? "invalid" : ""}`}
              />
              <ErrorMessage name="description" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="comment"
                as="textarea"
                placeholder="Additional comments"
                className={`form-field ${touched.comment && errors.comment ? "invalid" : ""}`}
              />
              <ErrorMessage name="comment" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="white-button"
              disabled={isSubmitting}
            >
              Submit your request
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestQuoteForm;
