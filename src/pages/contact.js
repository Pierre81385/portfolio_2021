import React from "react";
import gitImage from "../assets/GitHub_logo.png";
import facebookImage from "../assets/facebook.png";
import instagramImage from "../assets/instagram.png";
import linkedinImage from "../assets/linkedin.png";
import NavLink from "react-bootstrap/NavLink";
import resume from "../assets/resume.pdf";

export default function Contact() {
  const style = {
    img: {
      height: "150px",
    },
    table: {
      width: "100%",
      color: "white",
    },
    td: {
      width: "175px",
    },
    container: {
      display: "flex",
      flex: "wrap",
      padding: "15px",
    },
    div: {
      width: "100%",
      textAlign: "center",
      color: "white",
    },
    text: {
      padding: "50px",
      color: "white",
    },
    a: {
      textDecoration: "none",
      color: "white",
    },
    aAlt: {
      color: "white",
    },
  };

  return (
    <div style={style.container}>
      <div style={style.div}>
        <table style={style.table}>
          <tr>
            <td style={style.td}>
              <a href="https://github.com/Pierre81385">
                <img
                  src={`${gitImage}`}
                  alt="github"
                  className="logo hover-shadow"
                  id="gitLogo"
                  style={style.img}
                />
              </a>
            </td>

            <td style={style.td}>
              <div style={style.div}>G I T H U B</div>
            </td>
          </tr>

          <tr>
            <td>
              <a href="https://www.linkedin.com/in/peter-bishop-46a51597/">
                <img
                  src={`${linkedinImage}`}
                  alt="github"
                  className="logo"
                  id="gitLogo"
                  style={style.img}
                />
              </a>
            </td>
            <td>
              <div style={style.div}>L I N K E D I N</div>
            </td>
          </tr>

          <tr>
            <td>
              <a href="https://github.com/Pierre81385">
                <img
                  src={`${instagramImage}`}
                  alt="github"
                  className="logo"
                  id="gitLogo"
                  style={style.img}
                />
              </a>
            </td>
            <td>
              <div style={style.div}>I N S T A G R A M</div>
            </td>
          </tr>

          <tr>
            <td>
              <a href="https://www.facebook.com/PeterJBishop">
                <img
                  src={`${facebookImage}`}
                  alt="github"
                  className="logo"
                  id="gitLogo"
                  style={style.img}
                />
              </a>
            </td>
            <td>
              <div style={style.div}>F A C E B O O K</div>
            </td>
          </tr>
        </table>
      </div>
      <div style={(style.div, style.text)}>
        <h1>Follow me on social media!</h1>
        <h2>
          Phone:
          <span> </span>
          <a href="tel:7202725223" alt="phoneNumber" style={style.a}>
            720-272-5223
          </a>
        </h2>
        <h2>
          Email:{" "}
          <a href="mailto: pjb.den@gmail.com" style={style.aAlt}>
            pjb.den@gmail.com
          </a>
        </h2>
        <h3>
          Download My{" "}
          <a href={`${resume}`} style={style.aAlt}>
            Resume
          </a>
        </h3>
      </div>
    </div>
  );
}
