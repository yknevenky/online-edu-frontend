import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const MakeAnnouncement = () => {
  return (
    <div className="d-flex justify-content-center">
      <Formik
        initialValues={{
          announcementTitle: "",
          announcementDescription: "",
          document: "",
          documentDescription: "",
        }}
        validationSchema={Yup.object({
          announcementTitle: Yup.string().required("Title required"),
          announcementDescription: Yup.string().required(
            "Description required"
          ),
          documentDescription: Yup.string(),
        })}
        onSubmit={(values) => {}}
      >
        <Form className="text-start card p-3" style={{ width: 700 }}>
          <h1 className="text-center">Make the announcement</h1>
          <div className="m-3">
            <label className="form-label" name="announcementTitle">
              Title:
            </label>
            <Field
              name="announcementTitle"
              type="text"
              className="form-control"
            />
            <ErrorMessage
              name="announcementTitle"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="m-3">
            <label className="form-label" name="announcementDescription">
              Description:{" "}
            </label>
            <Field name="announcementDescription" className="form-control" />
            <ErrorMessage
              name="announcementDescription"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="m-3">
            <label className="form-label" name="document">
              Document (option)
            </label>
            <Field type="file" name="document" className="form-control" />
            <ErrorMessage
              name="document"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="m-3">
            <label className="form-label" name="documentDescription">
              Document description (optional)
            </label>
            <Field name="documentDescription" className="form-control" />
            <ErrorMessage
              name="documentDescription"
              className="form-text text-danger"
              component="div"
            />
          </div>
          <div className="d-grid m-3">
            <button className="btn btn-lg btn-primary">Announce</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default MakeAnnouncement;
