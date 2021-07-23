import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: "3rem" }}>
            Peter J Bishop
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: "1.75rem", fontWeight: "700" }}>
          Peter Bishop's Portfolio
        </p>
        <div>
          <>
            <Link className="btn btn-lg btn-light m-2" to="/home">
              Home
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/about">
              About
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/Work">
              Work{" "}
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/contact">
              Contact
            </Link>
          </>
        </div>
      </div>
    </header>
  );
};

export default Header;
