import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateClassroom = () => {
  return (
    <div className="text-center d-flex justify-content-center mt-5">
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={Yup.object({
          title: Yup.string().required("Title is required"),
          description: Yup.string().required("Description is required"),
        })}
        onSubmit={(values) => {}}
      >
        <Form style={{ width: 700 }} className="card text-start p-3">
          <h1 className="text-center mt-3">Create a classroom</h1>
          <div className="m-3 ">
            <label className="form-label" htmlFor="title">
              Title:
            </label>
            <Field name="title" className="form-control" type="text" />
            <ErrorMessage
              name="title"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="m-3">
            <label className="form-label" htmlFor="decription">
              Description
            </label>
            <Field
              name="description"
              className="form-control"
              type="textarea"
            />
            <ErrorMessage
              name="description"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-lg btn-outline-primary m-3">
              Create
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateClassroom;
