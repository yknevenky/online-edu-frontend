import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <div className="fluid-container mt-4 d-flex justify-content-center">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          phoneNumber: Yup.number("Should be a number")
            .required("Phone number is required")
            .positive("Phone number can only be a positive integer.")
            .integer("Phone number can only be an integer."),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="text-start card p-3" style={{ width: 700 }}>
          <h1 className="display-4 text-center">Sign Up</h1>
          <div className="m-3">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <Field name="firstName" className="form-control" type="text" />
            <ErrorMessage
              component="div"
              name="firstName"
              className="form-text text-danger"
            />
          </div>

          <div className="m-3">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <Field className="form-control" name="lastName" type="text" />
            <ErrorMessage
              component="div"
              name="lastName"
              className="form-text text-danger"
            />
          </div>

          <div className="m-3">
            <label className="form-label" htmlFor="phoneNumber">
              Phone number
            </label>
            <Field className="form-control" name="phoneNumber" type="number" />
            <ErrorMessage
              component="div"
              name="phoneNumber"
              className="form-text text-danger"
            />
          </div>
          <div className="m-3">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <Field className="form-control" name="email" type="email" />
            <ErrorMessage
              component="div"
              name="email"
              className="form-text text-danger"
            />
          </div>
          <div className="m-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <Field className="form-control" name="password" type="password" />
            <ErrorMessage
              component="div"
              name="password"
              className="form-text text-danger"
            />
          </div>
          <div class="d-grid gap-2 p-5">
            <button className="btn btn-lg btn-primary" type="submit">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
