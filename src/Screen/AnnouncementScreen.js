import React from "react";
import {Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const AnnouncementScreen = () => {
  return (
    <div className="d-flex justify-content-center m-5 row">
        <h1 className="display-3 text-center mb-5 text-success h1">Announcements screen</h1>
      <div className="row">
        <div className="col-7">
          <div className="card p-3">
            <div className="card-title h1">Card title</div>
            <div className="card-title h5" >Description</div>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              soluta facilis non ipsum sequi ratione nisi numquam sapiente
              quibusdam in voluptate delectus corrupti iste repellat, qui quia
              perspiciatis hic vero?
            </div>
          </div>
        </div>
        <div className="col-5">
            <div className="card">
                <Formik
                initialValues={{
                    announcementAttachment: ""
                }}
                validationSchema={Yup.object({
                    announcementAttachment: Yup.string().required("Document field is empty")
                })}
                >
                    <Form>
                        <div className="m-3">
                            <label className="card-title h1" htmlFor="announcementAttachment">Attach</label>
                            <Field className="form-control" type="file" name="announcementAttachment"/>
                            <ErrorMessage name="announcementAttachment" className="text-danger form-text" component="div"/>
                        </div>
                        <div className="d-grid p-3">
                            <button className="btn btn-lg btn-primary">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
      </div>
      <div className="card m-5">
        <div className="card-title h1 mt-5">Comments</div>
        <Formik 
        initialValues={{
            comment:""
        }}

        validationSchema={Yup.object({
            comment: Yup.string().required("Empty comment cannot be posted")
        })}
        >
            <Form className="m-2">
                
                <Field className="form-control" type="textarea" name="comment"/>
                <ErrorMessage name="comment" component="div" className="form-text text-danger"/>
            </Form>
        </Formik>
      </div>
    </div>
    
  );
};

export default AnnouncementScreen;
