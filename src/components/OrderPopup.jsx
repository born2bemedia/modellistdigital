"use client";
import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";
import * as Yup from "yup";
import { usePopup } from "@/context/PopupsContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomInput = React.forwardRef(
  ({ value, onClick, inputPlaceholder }, ref) => (
    <span
      className="custom-input"
      data-placeholder={inputPlaceholder}
      onClick={onClick}
      ref={ref}
    >
      <span>{value || inputPlaceholder}</span>
      <img src="/images/date.svg" />
    </span>
  )
);

const FormikDatePicker = ({ placeholder, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <div>
      <DatePicker
        {...field}
        {...props}
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => setFieldValue(field.name, date)}
        customInput={<CustomInput inputPlaceholder={placeholder} />}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

function OrderPopup() {
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a correct email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    budget: Yup.string().required("This field is required."),
    ideaDescription: Yup.string().required("This field is required."),
    deadline: Yup.date().required("This field is required."),
    targetAudience: Yup.string().required("This field is required."),
    platform: Yup.string().required("This field is required."),
    marketingGoal: Yup.string().required("This field is required."),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    ideaDescription: "",
    deadline: null,
    targetAudience: "",
    platform: "",
    marketingGoal: "",
    comment: "",
    acceptTerms: false,
    service: serviceValue,
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/emails/order", {
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
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, status, touched, errors, resetForm }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <svg
                className="popup-close"
                onClick={() => closePopup(resetForm)}
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18.5L2 2.5M18 2.5L2 18.5"
                  stroke="#161616"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <div className="form-wrap">
                  <Form>
                    {!status && (
                      <div className="form-inner">
                        <h2>
                          <span
                            dangerouslySetInnerHTML={{ __html: serviceValue }}
                          />{" "}
                          REQUEST
                        </h2>
                        <Field type="hidden" name="service" />
                        <div>
                          <Field
                            name="firstName"
                            type="text"
                            placeholder={"First name"}
                            className={
                              touched.firstName && errors.firstName
                                ? "invalid"
                                : ""
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
                            placeholder={"Last name"}
                            className={
                              touched.lastName && errors.lastName
                                ? "invalid"
                                : ""
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
                            name="email"
                            type="email"
                            placeholder={"Email"}
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            variant="light"
                            name="phone"
                            type="tel"
                            placeholder={"Phone"}
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="budget"
                            type="text"
                            placeholder={"Budget"}
                            className={
                              touched.budget && errors.budget ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="budget"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="ideaDescription"
                            type="text"
                            placeholder={"Idea description"}
                            className={
                              touched.ideaDescription && errors.ideaDescription
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="ideaDescription"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <FormikDatePicker
                            name="deadline"
                            placeholder={"Deadline"}
                          />
                          <ErrorMessage
                            name="deadline"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="targetAudience"
                            type="text"
                            placeholder={"Target audience"}
                            className={
                              touched.targetAudience && errors.targetAudience
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="targetAudience"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="platform"
                            type="text"
                            placeholder={"Platform"}
                            className={
                              touched.platform && errors.platform
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="platform"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="marketingGoal"
                            type="text"
                            placeholder={"Marketing goal"}
                            className={
                              touched.marketingGoal && errors.marketingGoal
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="marketingGoal"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="black-button"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </div>
                    )}
                    {status && status.success && (
                      <div className="success">
                        <h3>THANK YOU!</h3>
                        <p>
                          Your request has been received successfully!
                          <br />
                          One of our team members will get in touch with you
                          shortly.
                        </p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default OrderPopup;
