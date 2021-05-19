import React from "react";

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-4 m-auto">
            <img
              className="m-5"
              src="data:image/jpeg;base64,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"
              style={{ width: "30vh", height: "30vh" }}
            />
          </div>
          <div className="col-4 m-auto">
            <div className="h6 m-5">Name</div>
            <div className="h6 m-5">yknevenky@gmail.com</div>
            <div className="d-grid m-5">
              <button className="btn btn-lg btn-outline-primary">Plan</button>
            </div>
          </div>
          <div className="col-4 m-auto">
            <div className="d-grid m-5">
              <button className="btn btn-lg btn-danger">EDIT</button>
            </div>
            <div className="d-grid m-5">
              <button className="btn btn-lg btn-danger">Change plan</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col-6">
            <h3 className="text-left mx-2">Classroom created</h3>
            <div className="card rounded p-3">
              <h5 className="card-title">Classroom Title</h5>
              <p className="card-text">
                LcAAsMsuOzPHHnusgWRVMYXENaCXHYACSfADasvTaKYjILtpJbetqs
              </p>
            </div>
          </div>
          <div className="col-6">
            <h3 className="text-left mx-2">Classroom joined</h3>
            <div className="card rounded p-3">
              <h5 className="card-title">Classroom Title</h5>
              <p className="card-text">
                LcAAsMsuOzPHHnusgWRVMYXENaCXHYACSfADasvTaKYjILtpJbetqs
              </p>
            </div>
            <div className="card rounded p-3">
              <h5 className="card-title">Classroom Title</h5>
              <p className="card-text">
                LcAAsMsuOzPHHnusgWRVMYXENaCXHYACSfADasvTaKYjILtpJbetqs
              </p>
            </div>
          </div>
          <div className="col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
