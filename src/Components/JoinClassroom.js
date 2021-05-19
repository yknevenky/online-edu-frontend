import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const JoinClassroom = () => {
  return (
    <div className="text-center d-flex justify-content-center mt-5">
      <Formik
        initialValues={{
          classCode: "",
        }}
        validationSchema={Yup.object({
          classCode: Yup.string().required("Class code is required to join"),
        })}
      >
        <Form style={{ width: 700 }} className="card text-start">
          <h1 className="text-center">Enter the classroom code to join</h1>
          <div className="m-3">
            <label name="classCode" className="form-label">
              Class code:
            </label>
            <Field name="classCode" type="text" className="form-control" />
            <ErrorMessage
              name="classCode"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <button className="m-3 btn btn-lg btn-primary">Join</button>
        </Form>
      </Formik>
    </div>
  );
};

export default JoinClassroom;
