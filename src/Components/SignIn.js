import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  return (
    <div className="fluid-container mt-4 d-flex justify-content-center">
     
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values) => {
          
        }}
      >
        <Form className="text-start card p-3" style={{ width: 700 }}>
        <h1 className="display-4 text-center">Sign In</h1>
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

export default SignIn;
