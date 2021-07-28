import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Footer = () => {
  const location = useLocation();
  const history = useHistory();

  const style = {
    footer: {
      position: "absolute",
    },
  };

  return (
    <footer className="w-100 mt-auto text-dark p-4" style={style.footer}>
      <div
        className="container text-center mb-5"
        //style={{ backgroundColor: "red" }}
      >
        {location.pathname !== "/" && (
          <Button
            className="btn btn-dark mb-3"
            variant="outline-light"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </Button>
        )}
        <h4>&copy; {new Date().getFullYear()} - PeterJBishop</h4>
      </div>
    </footer>
  );
};

export default Footer;
