import React from "react";

const PlansOffered = () => {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: 700 }} className="card p-5">
        <div className="card p-5">
          <h5 className="card-title">Hello</h5>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="row">
            <div className="col-6">
              <div className="display-5">500 rs</div>
            </div>
            <div className="d-grid col-6">
              <button className="btn btn-lg btn-primary">Change</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansOffered;
