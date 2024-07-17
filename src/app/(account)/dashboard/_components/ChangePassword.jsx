"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const ChangePassword = () => {
  const { currentUser } = useAuth();
  const [changePasswordError, setChangePasswordError] = useState("");
  const [passwordChanged, setPasswordChanged] = useState(false);
  const router = useRouter();

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { currentPassword, newPassword } = values;
    const updateData = {
      email: currentUser.email,
      currentPassword,
      newPassword,
    };

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        setPasswordChanged(true);
        setChangePasswordError("");
        setTimeout(() => {
          setPasswordChanged(false);
          //router.push("/dashboard");
        }, 3000);
      } else {
        const errorData = await response.json();
        setChangePasswordError(errorData.message);
      }
    } catch (error) {
      console.error("Failed to change password", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="change-password">
      <div className="_container">
        <h2>Change Password</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="password-data">
                <div>
                  <label>
                    <Field
                      placeholder="Current password"
                      type="password"
                      name="currentPassword"
                      className={
                        touched.currentPassword && errors.currentPassword
                          ? "invalid"
                          : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="currentPassword"
                    component="div"
                  />
                </div>
                <div>
                  <label>
                    <Field
                      placeholder="New password"
                      type="password"
                      name="newPassword"
                      className={
                        touched.newPassword && errors.newPassword ? "invalid" : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="newPassword"
                    component="div"
                  />
                </div>
                <div>
                  <label>
                    <Field
                      placeholder="Confirm password"
                      type="password"
                      name="confirmPassword"
                      className={
                        touched.confirmPassword && errors.confirmPassword
                          ? "invalid"
                          : ""
                      }
                    />
                  </label>
                  <ErrorMessage
                    className="error"
                    name="confirmPassword"
                    component="div"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="black-button"
                disabled={isSubmitting}
              >
                Set new password
              </button>
              {passwordChanged && (
                <div className="success">Password changed successfully!</div>
              )}
              {changePasswordError && <div className="error">{changePasswordError}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ChangePassword;
