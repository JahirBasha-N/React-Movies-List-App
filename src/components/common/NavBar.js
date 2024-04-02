import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log("Nav Bar Renderes");
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/movies" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customers" className="nav-link">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/rentals" className="nav-link">
                Rentals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
