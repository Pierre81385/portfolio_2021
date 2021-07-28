import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/codeimage.jpg";

const Header = () => {
  const style = {
    Link: {
      fontFamily: "'Ubuntu Mono', monospace",
      color: "white",
      padding: "15px",
    },
    navDiv: {
      textAlign: "right",
    },
    headerDiv: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      paddingBottom: "10px",
      borderColor: "white",
      borderWidth: "10px",
      borderBottomStyle: "solid",
    },
    h1: {
      fontSize: "3rem",
      color: "white",
      fontFamily: "'Libre Barcode 39 Text', cursive",
    },
  };

  return (
    <div style={style.headerDiv}>
      <header className="bg-info text-light mb-4 py-3 display-flex align-center">
        <div
          className="container flex-column justify-space-between-lg justify-center align-center text-center"
          style={style.navDiv}
        >
          <h1 className="m-0" style={style.h1}>
            Peter J Bishop
          </h1>

          <div style={style.navDiv}>
            <>
              <Link
                variant="outline-dark"
                className="btn btn-lg m-2"
                to="/home"
                style={style.Link}
              >
                HOME
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-lg m-2"
                to="/about"
                style={style.Link}
              >
                ABOUT
              </Link>
              <Link className="btn btn-lg m-2" to="/Work" style={style.Link}>
                WORK
              </Link>
              <Link className="btn btn-lg m-2" to="/contact" style={style.Link}>
                CONTACT
              </Link>
            </>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
