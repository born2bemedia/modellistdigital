import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";

const RequestForm = () => {

    const { thanksPopupDisplay, setThanksPopupDisplay } = usePopup();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    budget: Yup.string().required("Budget is required"),
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

  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setThanksPopupDisplay(true);
      setSubmitting(false);
      resetForm();
      setStatus({ success: true });
    }, 400);
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
              <Field
                name="phone"
                type="tel"
                placeholder="Phone"
                className={touched.phone && errors.phone ? "invalid" : ""}
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="full">
              <Field
                name="budget"
                type="text"
                placeholder="Budget"
                className={touched.budget && errors.budget ? "invalid" : ""}
              />
              <ErrorMessage name="budget" component="div" className="error" />
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

            <button
              type="submit"
              className="white-button"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RequestForm;
