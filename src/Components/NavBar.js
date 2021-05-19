import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
      <ul className="d-flex justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="" className="nav-link">Help</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
        <li class="nav-item">
          <Link to="signin" className="nav-link">Sign In</Link>
        </li>
      </ul>
      </nav>
    </div>
  );
};

export default NavBar;
