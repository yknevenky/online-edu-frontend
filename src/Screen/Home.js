import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <React.Fragment>
      <div className="container text-center p-5 gy-3" style={{height: "80vh"}}>
        <h1 className="display-3 mb-5">
          Currently you have no classrooms enrolled
        </h1>
        <Link
          to="/join-classroom"
          style={{ width: 400 }}
          className="btn btn-lg btn-primary"
        >
          Join classroom
        </Link>
        <h1 className="h2 m-5">or</h1>
        <Link
          to="/create-classroom"
          style={{ width: 400 }}
          className="btn btn-lg btn-primary"
        >
          Create a classroom
        </Link>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
